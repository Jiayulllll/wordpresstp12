<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// check if pretty seo urls enabled from global settings
$ep_seo_full_class = $ep_seo_side_class = '';
$enable_seo_urls = em_global_settings('enable_seo_urls');
if ( ! empty( $enable_seo_urls ) ) {
    // if pretty url enabled then load header and footers
    get_header();
    $term = get_queried_object();
    $organizer_id = $term->term_id;
    $event_organizer_service = EventM_Factory::get_service('EventOrganizerM_Service');
    $organizer = $event_organizer_service->load_model_from_db($organizer_id);
    $ep_seo_full_class = 'ep-single-page';
    $ep_seo_side_class = 'ep-event-sidebar';
}
wp_enqueue_style('em-public-css'); 
wp_enqueue_script('em-public');
$event_service = EventM_Factory::get_service('EventM_Service');
$setting_service = EventM_Factory::get_service('EventM_Setting_Service');
$global_settings = $setting_service->load_model_from_db();
$currency_symbol = em_currency_symbol();
$organizer->count = $event_service->event_count_by_organizer($organizer_id);
$events = $event_service->events_by_organizer($organizer_id);  
$today = em_current_time_by_timezone();
$showBookNowForGuestUsers = em_show_book_now_for_guest_users();
$class = $section_id = $sec_unique = '';

/* shortcodes start */
if( isset( $atts['event_style'] ) ){
    $event_display_style = $atts["event_style"];
}else{
    $event_display_style = $global_settings->single_organizer_event_display_view;
}
if( isset( $atts['event_limit'] ) ){
    $single_organizer_event_limit = ( $atts["event_limit"] == 0 || $atts["event_limit"] == '' ) ? EM_PAGINATION_LIMIT : $atts["event_limit"];
}else{
    $single_organizer_event_limit = ( $global_settings->single_organizer_event_limit == 0 ) ? EM_PAGINATION_LIMIT : $global_settings->single_organizer_event_limit;
}
if( isset( $atts['event_cols'] ) ){
    $event_cols = ep_check_column_size( $atts['event_cols'] );
}else{
    $event_cols = ep_check_column_size( $global_settings->single_organizer_event_column );
}
if( isset( $atts['load_more'] ) ){
    $load_more = $atts["load_more"];
}else{
    $load_more = $global_settings->single_organizer_event_load_more;
}
if( isset( $atts['show_events'] ) ){
    $single_organizer_show_events = $atts['show_events'];
}else{
    $single_organizer_show_events = $global_settings->single_organizer_show_events;
}
if( isset( $atts['hide_past_events'] ) ){
    $hide_past_events = $atts['hide_past_events'];
}else{
    $hide_past_events = $global_settings->single_organizer_hide_past_events;
}
/* shortcode end */
$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
?>
<div class="ep-performer-page-container">
    <div class="ep-container <?php echo esc_attr($class);?> <?php echo esc_attr($ep_seo_full_class);?>" id="<?php echo esc_attr($sec_unique);?>">
        <?php if ( ! empty( $enable_seo_urls ) ) {?>
            <div class="em-single-header-area">
                <h1><?php echo esc_html($term->name);?></h1>
            </div><?php
        }?>
        <div class="ep-single-performer-wrapper">
            <div class="ep-box-wrap ep-performer-details-info-wrap">
                <div class="ep-box-row">
                    <div class="ep-box-col-2">
                        <div class="ep-single-box-thumb">
                            <div class="ep-single-figure-box">
                                <img src="<?php if (isset($organizer->image_id)) echo wp_get_attachment_image_src($organizer->image_id, 'large')[0]; else echo esc_url(EM_BASE_FRONT_IMG_URL.'dummy_image.png'); ?>" alt="<?php _e('Event Organizer Image', 'eventprime-event-calendar-management'); ?>">
                            </div>
                        </div>
                    </div>
                    <div class="ep-box-col-10">
                        <div class="ep-single-box-info">
                            <div class="ep-single-box-content">
                                <div>
                                    <div class="ep-single-box-title-info">
                                        <h3 class="ep-single-box-title ep-performer-name" title="<?php echo $organizer->name; ?>"><?php echo $organizer->name; ?></h3>

                                        <ul class="ep-single-box-details-meta">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8  4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                                                <?php 
                                                if ( ! empty( $organizer->organizer_emails ) ) { 
                                                    foreach( $organizer->organizer_emails as $key => $val ) {
                                                        $organizer->organizer_emails[$key] = '<a href="mailto:'.$val.'">'.htmlentities( $val ).'</a>';
                                                    }
                                                    echo implode( ', ', $organizer->organizer_emails ); 
                                                } else _e( 'Not Available', 'eventprime-event-calendar-management' ); ?>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/></svg>
                                                <?php if (  !empty( $organizer->organizer_phones ) ) echo implode( ', ', $organizer->organizer_phones ); else _e( 'Not Available', 'eventprime-event-calendar-management' ); ?>
                                            </li>
                                            <li>
                                               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                                <?php if ( ! empty( $organizer->organizer_websites ) ) { 
                                                    foreach( $organizer->organizer_websites as $key => $val ) {
                                                        if( ! empty( $val ) ){
                                                            $organizer->organizer_websites[$key] = '<a href="'.$val.'" target="_blank">'.htmlentities( $val ).'</a>';
                                                        }
                                                    }
                                                    echo implode( ', ', $organizer->organizer_websites ); 
                                                } else _e( 'Not Available', 'eventprime-event-calendar-management' ); ?>
                                            </li>
                                        </ul>
                                    </div>
                                    <?php if ( ! empty( $organizer->social_links ) ){
                                        echo '<div class="ep-single-box-social">';
                                            if( isset( $organizer->social_links->facebook ) )
                                                echo '<a href="'.$organizer->social_links->facebook.'" target="_blank" title="Facebook" class="ep-facebook-f"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a></li>';
                                            if( isset( $organizer->social_links->instagram ) )
                                                echo '<a href="'.$organizer->social_links->instagram.'" target="_blank" title="Instagram" class="ep-instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>';
                                            if( isset( $organizer->social_links->linkedin ) )
                                                echo '<a href="'.$organizer->social_links->linkedin.'" target="_blank" title="Linkedin" class="ep-twitter"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>';
                                            if( isset( $organizer->social_links->twitter ) )
                                                echo '<a href="'.$organizer->social_links->twitter.'" target="_blank" title="Twitter" class="ep-twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>';
                                        echo '</div>';
                                    } ?>
                                    <div class="ep-single-box-summery">
                                        <p class="ep-single-box-desc">
                                            <?php if (isset($organizer->description) && $organizer->description !== '') echo $organizer->description; 
                                            else _e('No description available', 'eventprime-event-calendar-management'); ?>
                                        </p>
                                    </div>
                                </div>                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!-- single performer event views -->
    <?php if($single_organizer_show_events == 1){
        $event_args  = new stdClass();
        $event_args->event_style = $event_display_style;
        $event_args->event_limit = $single_organizer_event_limit;
        $event_args->event_cols = $event_cols;
        $event_args->load_more = $load_more;
        $event_args->hide_past_events = $hide_past_events;

        if( $event_display_style == 'card' || $event_display_style == 'list' || $event_display_style == 'mini-list' ){ ?>
            <div class="emagic <?php echo $class;?>" id="<?php echo $sec_unique;?>">
                <div id="ep-upcoming-events" class="em_content_area ep-upcoming-events">
                    <div id="post-<?php echo $organizer->id; ?>">
                        <?php 
                        $args = array(
                            'orderby' => 'date',
                            'posts_per_page' => $single_organizer_event_limit,
                            'offset'=> (int) ($paged-1) * $single_organizer_event_limit,
                            'paged' => $paged,
                        );
                        $args['post_status'] = !empty($hide_past_events) == 1 ? 'publish' : 'any';
                        $upcoming_events = $event_service->upcoming_events_for_organizer( $organizer->id, $args );
                        $event_service->print_upcoming_event_block_for_organizers($upcoming_events, $event_args);
                        ?>
                    </div>
                </div>
            </div>
        <?php 
        } 
    }?>
    <!-- .content-area ends-->
    <?php
    if(!empty($enable_seo_urls)){?>
        <div class="emagic-sidebar <?php echo $ep_seo_side_class;?>">
            <?php dynamic_sidebar();?>
        </div><?php
    }?>
</div>

<?php 
if ( ! empty( $enable_seo_urls ) ) {
    get_footer();
}