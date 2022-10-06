<?php
/**
 * Plugin Name: Embed HTML5 Game
 * Plugin URI: https://redfoc.com
 * Description: Embed your HTML5 Game easily with Embed HTML5 Game plugin.
 * Author: RedFoc
 * Author URI: http://redfoc.com
 * Version: 1.3
 * Requires at least: 4.0
 * Tested up to: 5.4.1
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') or die('abcd');

function customplugin_menu() {

  add_menu_page('Embed HTML5 Game', 'Embed Game', 'manage_options', 'embed_game', "uploadfile");
  add_submenu_page("embed_game","Upload file", "Upload file","manage_options", "uploadfile", "uploadfile");
 
}

//add_action("admin_menu", "customplugin_menu");

function embed_game_menu() {
	add_management_page('Embed HTML5 Game', 'Embed Game', 'manage_options', 'embed_game', 'embed_game_options');
	add_management_page('Embed HTML5 Game', 'Upload a Game', 'manage_options', 'upload_game', 'uploadfile');
	add_management_page('Embed HTML5 Game', 'Uploaded Game', 'manage_options', 'game_list', 'gamelist');
}

add_action('admin_menu', 'embed_game_menu');


function embed_game_options() {
  include 'embed.php';
}
function gamelist() {
  include 'game-list.php';
}
function uploadfile(){
  include "uploadfile.php";
}

function embed_x($atts){
  $a = shortcode_atts( array(
    'url' => '',
    'width' => '',
    'height' => '',
    'class' => '',
    'full' => '',
    'percent' => ''
    ), $atts);
  $fullx = $a['full'];
  $full1 = '';
  $full2 = '';

  $a['percent'] = round($a['height']/$a['width']*100);
  echo redfoc_get_css();
  echo "<style>.redfoc-embed { padding-bottom: {$a['percent']}%; } .wp-embed-width {}</style>";
  if ($fullx=='false') {
    $full1 = "<div style=\"max-width: {$a['width']}px;\">";
    $full2 = "</div>";
  }

  return "{$full1}<div class=\"redfoc-embed\"><iframe src=\"{$a['url']}\" class=\"wp-embed-frame {$a['class']}\" frameborder=\"0\"></iframe></div>{$full2}";
}
add_shortcode('embedx', 'embed_x');

function redfoc_get_css() {
	wp_register_style('style', plugin_dir_url(__FILE__) . 'css/style.css');
	wp_enqueue_style('style');
}

add_action('wp_enqueue_scripts', 'redfoc_get_css');
?>