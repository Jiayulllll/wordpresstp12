<?php
$venue_page_id = em_global_settings('venues_page');
$venue_id = absint(event_m_get_param('venue'));
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$service = EventM_Factory::get_service('EventM_Venue_Service');
wp_enqueue_style('em-public-css');
wp_enqueue_script('em-public');
wp_enqueue_script('jquery-colorbox');
em_localize_map_info();

if (!empty($venue_id)){
    $venue = $service->load_model_from_db($venue_id);
    include_once 'venue.php';
}
else{
    if(isset($atts['venues'])){
        $venues = $atts['venues'];
    } 
    else{
        $venues = $service->get_venues(array('paged' => $paged,'offset' => (int) ($paged - 1) * EM_PAGINATION_LIMIT,
            'order' => event_m_get_param('order'),
            'number' => EM_PAGINATION_LIMIT
        ));
    }
    $class = $section_id = $sec_unique = $column_class = '';
    $page = true;
    if(isset($atts['section_id'])){
        $section_id = $atts['section_id'];
        $page = false;
        $sec_unique = 'venues-section-'.$section_id;
    }
    if(isset($atts['class'])){
        $class = $atts['class'];
    }
    if(isset($atts['column_class'])){
        $column_class = $atts['column_class'];
    }?>
    <div class="emagic <?php echo $class;?>" id="<?php echo $sec_unique;?>">
        <?php if($section_id == ''):?>
            <div id="map" class="em_block dbfl">
                <div id="venues_map_canvas" style="height: 400px;"></div> 
            </div>    
        <?php endif;?>
        <?php if(!empty($venues)) : ?>
            <div class="em_venues em_block dbfl">
                <?php foreach ($venues as $venue): ?>
                    <?php
                    $venue_url = add_query_arg('venue', $venue->id, get_permalink($venue_page_id));
                    $enable_seo_urls = em_global_settings('enable_seo_urls');
                    if(!empty($enable_seo_urls)){
                        $venue_url = get_term_link($venue->id);
                    }?>
                    <div class="em_venue_card difl <?php echo $column_class;?>">
                        <div class="kf-venue-wrap dbfl">
                            <div class="em_venue_image em_block dbfl">
                                <!-- Div Display First image  from Gallery of Venues -->
                                <div class="em_venue_image_cover">
                                    <?php if (!empty($venue->gallery_images)): ?>
                                        <a href="<?php echo esc_url($venue_url); ?>" target="_blank"><?php echo wp_get_attachment_image($venue->gallery_images[0]); ?></a> 
                                    <?php else: ?>
                                        <a href="<?php echo esc_url($venue_url); ?>" target="_blank"><img src="<?php echo esc_url(plugins_url('/images/dummy_image_thumbnail.png', __FILE__)) ?>" alt="<?php _e('Dummy Image','eventprime-event-calendar-management'); ?>" class="em-no-image"></a>
                                    <?php endif; ?>                        
                                </div>
                            </div>

                            <div class="em_venue_description dbfl">
                                <div class="em_venue_name dbfl em_wrap">
                                    <a href="<?php echo esc_url($venue_url); ?>" target="_blank"><?php echo $venue->name; ?></a><br>      
                                    <!--Display Name of Venue -->                   
                                </div>

                                <div class="kf-venue-seating-capacity dbfl em_color">
                                    <?php if (!empty($venue->type)) : // here we are checking about the type first because in Standing we dont have capacity and in Seat we have capacity
                                        if ($venue->type == 'standings'): ?>
                                            <div class="kf-event-attr-name em_color dbfl"><?php echo __("Type",'eventprime-event-calendar-management'); ?></div>
                                            <div class="kf-event-attr-value dbfl"><?php echo __("Standing",'eventprime-event-calendar-management'); ?></div>

                                        <?php else: ?>
                                            <div class="kf-event-attr-name em_color dbfl"><?php echo __("Capacity",'eventprime-event-calendar-management'); ?></div>
                                            <div class="kf-event-attr-value dbfl"> 
                                                <?php echo $venue->seating_capacity . ' '.__('People','eventprime-event-calendar-management'); ?>
                                            </div>
                                        <?php endif;
                                    endif;?>
                                </div>

                                <div class="em_venue_add dbfl nik">
                                    <?php 
                                    if (!empty($venue->address)){
                                        echo wp_trim_words($venue->address, 10);
                                    }?>
                                </div>
                            </div>
                            <?php $events = $service->get_upcoming_events($venue->id); // Upcoming events?>
                            <div class="kf-events-count-wrap em_bg" ><span class="em_events_count_no" ><?php echo count($events); ?></span></div>
                        </div>
                    </div><?php
                endforeach;?>
            </div>
            <?php
            if($page){
                $total = count($service->get_venues());
                $pages = ceil($total / EM_PAGINATION_LIMIT);
                // if there's more than one page
                if ($pages > 1){
                    echo '<ul class="pagination">';
                    for($pagecount = 1; $pagecount <= $pages; $pagecount++){
                        echo '<li><a href="' . add_query_arg('paged', $pagecount, get_permalink()) . '">' . $pagecount . '</a></li>';
                    }
                    echo '</ul>';
                }
            }?>
        <?php else :  ?>
            <div class="ep-alert-warning ep-alert-info">
                <?php _e(' No venues found.','eventprime-event-calendar-management'); ?>
            </div>
        <?php endif; ?>
    </div>
    <?php if($section_id == ''){?>
        <script>
            document.addEventListener("DOMContentLoaded", function(event) {
                em_load_map('venues', 'venues_map_canvas');
            });
        </script><?php 
    }
} ?>