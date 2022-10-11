<?php
class EventM_Paypal_Service extends EventM_Payment_Service {
    
    private static $instance = null;
    
    public static function get_instance()
    {   
        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }
    
    public function __construct() {
        parent::__construct("paypal");
        $this->actions();
    }

    public function actions(){
        add_action('event_magic_front_payment_processors',array($this,'show_on_front'),10,1);
        add_action('event_magic_front_payment_forms',array($this,'paypal_form'));
        add_action('wp_ajax_event_magic_pp_ipn',array($this,'paypal_ipn'));
        add_action('wp_ajax_nopriv_event_magic_pp_ipn',array($this,'paypal_ipn'));
    }
    
    public function paypal_ipn(){
        if ($this->verify_ipn()) {
            $this->update_booking_info();
        }
    }
    
    public function verify_ipn() {
        $raw_post_data = file_get_contents('php://input');
        $raw_post_array = explode('&', $raw_post_data);
        $data = array();
        foreach ($raw_post_array as $keyval) {
            $keyval = explode('=', $keyval);
            if (count($keyval) == 2)
                $data[$keyval[0]] = urldecode($keyval[1]);
        }
        // read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
        $req = 'cmd=_notify-validate';
        if (function_exists('get_magic_quotes_gpc')) {
            $get_magic_quotes_exists = true;
        }

        foreach ($data as $key => $value) {
            if ($get_magic_quotes_exists == true && get_magic_quotes_gpc() == 1) {
                $value = urlencode(stripslashes($value));
            } else {
                $value = urlencode($value);
            }
            $req .= "&$key=$value";
        }

        // Step 2: POST IPN data back to PayPal to validate
        $gs_service = EventM_Factory::get_service('EventM_Setting_Service');
        $settings = $gs_service->load_model_from_db();
        $url = !empty($settings->payment_test_mode) ? 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr' : 'https://ipnpb.paypal.com/cgi-bin/webscr';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Connection: Close'));
        if (!($res = curl_exec($ch))) {
            curl_close($ch);
            exit;
        }
        curl_close($ch);

        // inspect IPN validation result and act accordingly
        if (strcmp($res, "VERIFIED") == 0) {
            return true;
        } else if (strcmp($res, "INVALID") == 0) {
            
        }
        return false;
    }

    public function update_booking_info() {
        $booking_service= EventM_Factory::get_service('EventM_Booking_Service');
        $ids = event_m_get_param('custom');
        $booking_ids = explode(',', $ids);
        foreach ($booking_ids as $booking_id) {
            $booking = $booking_service->load_model_from_db($booking_id);
            if (empty($booking->id))
                continue;
            $data = $_POST;
            $data['payment_gateway'] = 'paypal';
            if (strtolower($data['payment_status']) == "refunded") {
                if (isset($booking->payment_log['refund_log'])){
                    $booking->payment_log['refund_log'][] = $data;
                }  
                else{
                     $booking->payment_log['refund_log'] = array($data);
                }
                em_update_post_meta($booking->id, 'payment_log',$booking->payment_log);
                continue;
            } 
            else
            {
                $booking_service->confirm_booking($booking->id,$data);
            }    
        }
    }

    public function refund($booking, $info = array()) {
        $gs_service = EventM_Factory::get_service('EventM_Setting_Service');
        $booking_service= EventM_Factory::get_service('EventM_Booking_Service');
        $order_info = $booking->order_info;
        $pp_log = $booking->payment_log;
        
        if ($booking->status == "refunded" || strtolower($pp_log['payment_status']) == "refunded")
            return false;
        
        if (empty($booking->id) || empty($pp_log))
            return false;
        
        $methodName_ = 'RefundTransaction';
        // Set request-specific fields.
        $transactionID = urlencode($pp_log['txn_id']);
        $refundType = urlencode('Full');  // or 'Partial'
        $amount = $booking_service->get_final_price($booking->id);
        if ($pp_log['mc_gross'] > $amount) {
            $refundType = urlencode('Partial');
            $memo = "Partial Refund";
        }

        $settings = $gs_service->load_model_from_db();
        $currencyID = urlencode($settings->currency);   // or other currency ('GBP', 'EUR', 'JPY', 'CAD', 'AUD')
        // Add request-specific fields to the request string.
        $nvpStr = "&TRANSACTIONID=$transactionID&REFUNDTYPE=$refundType&CURRENCYCODE=$currencyID";

        if (isset($memo)) {
            $nvpStr .= "&NOTE=$memo";
        }

        if (strcasecmp($refundType, 'Partial') == 0) {
            if (!isset($amount)) {
                exit('Partial Refund Amount is not specified.');
            } else {
                $nvpStr = $nvpStr . "&AMT=$amount";
            }

            if (!isset($memo)) {
                exit('Partial Refund Memo is not specified.');
            }
        }

        /**
         * Send HTTP POST Request
         *
         * @param     string     The API method name
         * @param     string     The POST Message fields in &name=value pair format
         * @return     array     Parsed HTTP Response body
         */
        // Set up your API credentials, PayPal end point, and API version.
        $API_UserName = urlencode($settings->paypal_api_username);
        $API_Password = urlencode($settings->paypal_api_password);
        $API_Signature = urlencode($settings->paypal_api_sig);
        
        if (empty($API_UserName) || empty($API_Password) || empty($API_Signature))
            return false;

        $sandbox = $settings->payment_test_mode;
        if ($sandbox == 1)
            $API_Endpoint = "https://api-3t.sandbox.paypal.com/nvp";
        else
            $API_Endpoint = "https://api-3t.paypal.com/nvp";

        $version = urlencode('119');

        // Set the curl parameters.
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $API_Endpoint);
        curl_setopt($ch, CURLOPT_VERBOSE, 1);

        // Turn off the server and peer verification (TrustManager Concept).
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);

        // Set the API operation, version, and API signature in the request.
        $nvpreq = "METHOD=$methodName_&VERSION=$version&PWD=$API_Password&USER=$API_UserName&SIGNATURE=$API_Signature$nvpStr";

        // Set the request as a POST FIELD for curl.
        curl_setopt($ch, CURLOPT_POSTFIELDS, $nvpreq);

        // Get response from the server.
        $httpResponse = curl_exec($ch);
        
        if (!$httpResponse) {
            exit("$methodName_ failed: " . curl_error($ch) . '(' . curl_errno($ch) . ')');
        }

        // Extract the response details.
        $httpResponseAr = explode("&", $httpResponse);

        $httpParsedResponseAr = array();
        foreach ($httpResponseAr as $i => $value) {
            $tmpAr = explode("=", $value);
            if (sizeof($tmpAr) > 1) {
                $httpParsedResponseAr[$tmpAr[0]] = $tmpAr[1];
            }
        }

        if ((0 == sizeof($httpParsedResponseAr)) || !array_key_exists('ACK', $httpParsedResponseAr)) {
            exit("Invalid HTTP Response for POST request($nvpreq) to $API_Endpoint.");
        }
        return $httpParsedResponseAr;
    }

    public function cancel($order_id) {
        
    }

    public function charge($info = array()) {
        return null;
    }

    public function show_on_front(){
        $settings_service= EventM_Factory::get_service('EventM_Setting_Service');
        $gs= $settings_service->load_model_from_db();
        if(empty($gs->paypal_processor))
            return;
    ?>
        <div  class="difl kf-payment-mode-select" ng-show="price > 0 && bookable && payment_processors.hasOwnProperty('paypal')">
            <input type="radio" name="paypal" value="paypal" ng-model="data.payment_processor" /><i class="fa fa-paypal" aria-hidden="true"></i> <?php echo __("Paypal", 'eventprime-event-calendar-management'); ?>
        </div>
    <?php    
    }
    
    public function paypal_form($event){
        $settings_service= EventM_Factory::get_service('EventM_Setting_Service');
        $gs= $settings_service->load_model_from_db(); 
        if(empty($gs->paypal_processor)){
            return;
        }
        $url = !empty($gs->payment_test_mode) ? 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr' : 'https://ipnpb.paypal.com/cgi-bin/webscr';
        $notify_url = add_query_arg(array('action' => 'event_magic_pp_ipn'),admin_url('admin-ajax.php'));
        $return_url = add_query_arg(array('em_bookings' => "{{order_ids}}"),get_permalink($gs->profile_page));
        $user= wp_get_current_user();
        ?>
        <form ng-show="data.pp.show_paypal" method="post" name="emPaypalForm" action= <?php echo $url; ?>>
            <input type="hidden" name="cmd" value="_xclick">
            <input type="hidden" name="business" value="<?php echo $gs->paypal_email; ?>">
            <input type="hidden" name="item_name" value="<?php echo $event->name; ?>">
            <input type="hidden" name="item_number" value="{{item_numbers}}">
            <input type="hidden" name="amount" value="{{price}}">
            <input type="hidden" name="first_name" value="<?php echo $user->display_name; ?>">
            <input type="hidden" name="email" value="<?php echo $user->user_email; ?>">
            <input type="hidden" name="custom" value="{{order_ids}}">
            <INPUT TYPE="hidden" NAME="return" value="<?php echo $return_url; ?>">
            <INPUT TYPE="hidden" NAME="currency_code" value="<?php echo $gs->currency; ?>">
            <input type="hidden" name="bn" value="CMSHelp_SP">
            <INPUT TYPE="hidden" NAME="notify_url" value="<?php echo $notify_url; ?>">
            <input type="hidden" name="coupon_code" value="{{couponCode}}" />
            <input type="hidden" name="coupon_amount" value="{{order.coupon_amount}}" />
            <input type="hidden" name="coupon_type" value="{{order.coupon_type}}" />
            <input type="hidden" name="coupon_discount" value="{{order.coupon_discount}}" />
        </form>
    <?php    
    }
}
EventM_Paypal_Service::get_instance();