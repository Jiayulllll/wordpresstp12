<div class="wrap">
 <h2>Embed HTML5 Game</h2>
    <div style="font-size: 18px;">by <a href="https://redfoc.com">RedFoc</a>, Read <a href="https://redfoc.com/embed-html5-game-wordpress-plugin/" target="_blank">documentation</a></div>
    <br>
     
    <?php
        if( isset( $_GET[ 'page' ] ) ) {
            $active_tab = $_GET[ 'page' ];
        } // end if
    ?>
     
    <h2 class="nav-tab-wrapper">
        <a href="?page=embed_game" class="nav-tab <?php echo $active_tab == 'embed_game' ? 'nav-tab-active' : ''; ?>">Generate shortcode</a>
        <a href="?page=upload_game" class="nav-tab <?php echo $active_tab == 'upload_game' ? 'nav-tab-active' : ''; ?>">Upload a game</a>
        <a href="?page=game_list" class="nav-tab <?php echo $active_tab == 'game_list' ? 'nav-tab-active' : ''; ?>">Uploaded game</a>
    </h2>
</div>