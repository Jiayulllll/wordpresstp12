<?php include 'plugin-header.php' ?>
<div class="wrap regenthumbs">
	<br/>
	<p>By using Embed HTML5 Game, you can embed your HTML5 game, video, etc, on your WordPress post, page or widget easily. Embed HTML5 Game can make your HTML5 game or video fit on any screen size.</p>

	<p>Generate your shortcode bellow and put to your post, page, widget, etc. shortcode output based on iframe, so, your embedded content will be support on any modern browser.</p>
	<p><strong>*Note:</strong> If your site is run over <b>HTTPS</b> you need to load a game that are loaded over HTTPS, or your game can't be loaded.</p>


	<table class="form-table">
   <table class="form-table">

   		<tr valign="top">
        <th scope="row">URL</th>
        <td><input type="text" id="rurl" placeholder="http://"/> Target URL. Ex: <code>http://domain.com/game/index.html</code> or <code>/game/</code><br>
    	</td></tr>
    
        <tr valign="top">
        <th scope="row">Width</th>
        <td><input type="text" id="rwidth" placeholder="1280"/> Width in pixels<br>
    	</td></tr>

    	<tr valign="top">
        <th scope="row">Height</th>
        <td><input type="text" id="rheight" placeholder="720"/> Height in pixels<br>
    	</td></tr>

    	<tr valign="top">
        <th scope="row">Custom CSS</th>
        <td><input type="text" id="rclass" value="" /> (Optional) Custom CSS class, Ex: <code>my-style container</code><br>
    	</td></tr>

        <tr><th scope="row">Full width</th>
        <td><input type="checkbox" id="rfull" checked="checked" /> Check this option if you want to make it full width</td></tr>


        <tr valign="top">
        <th scope="row">
        	<a type="submit" style="font-weight: normal;" class="button-primary" name="submit-generate" value="Generate" onclick="generate_shortcode();">Generate</a>
        </th>
        <td><code id="generated" type="text" readonly="" onclick="this.select()" style="font-size: 17px; padding: 6px 12px; border-radius: 4px;">[embedx]</code><br>
    	</td></tr>
    </table>
    </table>
    <p class="submit"></p>

    <table>
    	
    </table>

</div>

<p>
<b>Embed HTML5 Game v1.3</b>
</p>

<script>
	function generate_shortcode() {
		var get_element = document.getElementById("generated");
		//
		
		var xurl = document.getElementById("rurl").value;
		var xwidth = document.getElementById("rwidth").value;
		var xheight = document.getElementById("rheight").value;
		var xclass = document.getElementById("rclass").value;
		var xfull = document.getElementById("rfull").checked;
		
		var rurl = '';
		var rwidth = '';
		var rheight = '';
		var rclass = '';
		var rfull = '';

		if (xurl != '') {
			rurl = ' url="'+xurl+'"';
		}
		if (xwidth != '') {
			rwidth = ' width="'+xwidth+'"';
		}
		if (xheight != '') {
			rheight = ' height="'+xheight+'"';
		}
		if (xclass != '') {
			rclass = ' class="'+xclass+'"';
		}
		if (xfull == false) {
			rfull = ' full="'+xfull+'"';
		}
		//alert(rwidth);
		if (rurl != '' && rwidth != '' && rheight != '') {
			get_element.innerHTML = '[embedx'+rurl+''+rwidth+''+rheight+''+rclass+''+rfull+']';
		}
		else {
			alert('URL, Width and Height must be filled!');
		}
		
	}
</script>