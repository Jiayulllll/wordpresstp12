<?php include 'plugin-header.php' ?>
<p>Game folder "rf_games" (root domain)</p>
<p>Copy game url then paste it to "Generate shortcode" tab to generate an embeded shortcode.</p>
<?php
$dir = '../rf_games/';
if (file_exists($dir)) {
	$game_list = scandir($dir);
	$total_list = count($game_list);
	echo "<tbody>";
	foreach($game_list as $game)
	{
	    if( $game != '.' && $game != '..' )
	    {
	       echo '<div><p>'.$game.' <b>URL:</b> <code>http://'.$_SERVER['HTTP_HOST'].'/rf_games/'.$game.'</code> <a href="http://'.$_SERVER['HTTP_HOST'].'/rf_games/'.$game.'" target="_blank">Play game</a></p></div>';
	    }
	}
	echo "</tbody>";
} else {
	echo '<h3>No data</h3>';
}
?>