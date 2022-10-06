<?php include 'plugin-header.php' ?>
<?php
if(isset($_POST["submit"])) {
  $overwrite = true;
  $target_dir = '../rf_games/';
  if (!file_exists($target_dir)) {
      mkdir($target_dir, 0777, true);
  }
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  $uploadOk = 1;
  $file_type = pathinfo($target_file,PATHINFO_EXTENSION);
  $tmp_n = basename( $_FILES["fileToUpload"]["name"]);
  $file_name = substr($tmp_n, 0, -4);

  // Check if file already exists
  if($overwrite == false){
      if (file_exists($target_file)) {
          echo "Sorry, file already exists.";
          $uploadOk = 0;
      }
  }
  // Check file size
  if ($_FILES["fileToUpload"]["size"] > 50000000) {
      echo "Sorry, your file is too large.";
      $uploadOk = 0;
  }
  // Allow certain file formats
  if($file_type != "zip" ) {
    echo '<div class="notice notice-warning"><p>Sorry, only ZIP file are allowed.</p></div>';
      $uploadOk = 0;
  }

  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
  // if everything is ok, try to upload file
  } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
          if($file_type != 'zip'){
              $file_name = $file_name.'.'.$file_type;
          }
          //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
          if($file_type == 'zip'){
              get_zip($target_file, $target_dir, $file_name, $overwrite);
          }
      } else {
        echo '<div class="notice notice-warning"><p>Sorry, there was an error uploading your file.</p></div>';
      }
  }
}
function get_zip($file, $dir, $name, $over){
      $target_folder = $dir.$name;
      $unzip = true;
      if (!file_exists($target_folder)) {
          mkdir($target_folder, 0777, true);
      } else {
          if($over == false){
              $unzip = false;
          }
      }

      if($unzip == true){
          $zip = new ZipArchive;
          if ($zip->open($file) === TRUE) {
            $name = '';
            $have_index = false;
            for( $i = 0; $i < $zip->numFiles; $i++ ){
                $filename = $zip->getNameIndex($i);
                if($filename === 'index.html'){
                  $have_index = true;
                  break;
                }
            }
            if($have_index){
              $zip->extractTo($target_folder);
              echo '<div class="notice updated is-dismissible"><p>Game uploaded. Path: '.$target_folder.'</p></div>';
            } else {
              echo '<div class="notice notice-warning"><p>No index.html file on root!</p></div>';
            }
              $zip->close();
              unlink($file);
          } else {
              echo 'failed';
          }
      }
  }

?>
<div class="wrap regenthumbs">
  <h2>Upload HTML5 Game</h2>
  <br>
  <p>Only zip file are supported. and must contain index.html file on the root folder.</p>
  <p>Game files will be uploaded to 'rf_game' folder (root domain), folder url http://<?php $_SERVER['HTTP_HOST'] ?>'/rf_games/</p>
  <form method="post" action="" enctype="multipart/form-data" class="box has-advanced-upload">

    
    <div class="box__input">
      <input type="file" name="fileToUpload" id="file" class="box__file" data-multiple-caption="{count} files selected" multiple="">
    </div>
    <input type="submit" class="button-primary" value="Upload Game" name="submit">

  </form>
</div>