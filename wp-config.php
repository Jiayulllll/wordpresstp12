<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '0ae4150952e6c312e5375334dc6fc52cce8d2b54279c1f63a24c958af3d6ba76' );


/** Database hostname */

define( 'DB_HOST', 'localhost:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         ',ok>?|8<w/Y(QJ`;|:-%#og*WCv/K84UM7?gIfqr/24,y} )o^#,mHIw~[(zk&?M' );

define( 'SECURE_AUTH_KEY',  'Ro<$E:?HZM;_7eYQ?`5(vZ4GF(OM7QkYB1Bhm(r@O=ZvuL?S*h`W(//NQXv9sfRm' );

define( 'LOGGED_IN_KEY',    '{^#,*GqRW(%NwA`)i~T*OYR^M(*^GW^YGo[?$uX,,e#OAX%{zyXLzV!Tdv?rUsO|' );

define( 'NONCE_KEY',        'H+?BCP0#1)QXrQ.6jm. 8+QZ+Y55DtMos:/yW=ycK$ae11WV*S-<~*(6%_+kW,wo' );

define( 'AUTH_SALT',        'QUtY8Y{t}b{`)r!px_`MZe9t}%lle;KVM8jP&+z8I]qi%P>RI>$h(6s@.| mVZbc' );

define( 'SECURE_AUTH_SALT', 'eNA%8dE(SxH+f=}=`}K!MNNTY#m)+i*U0i}#n.w#Vi*BC`3?2vB.<6~u)cMttd6E' );

define( 'LOGGED_IN_SALT',   'g0G/:F(|0)3T]Mr~;c#bqpCQg]`YPBD(<w/1b>K``h3QK5GeVX4]K[&nhxcT?$v}' );

define( 'NONCE_SALT',       'Zw*6z5A<a0nuWd^T(h[ pGip?a2<%f* ]#kjM<<J_HR~5x4H8q;l?2uW7,t/vZmG' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
