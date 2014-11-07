<!DOCTYPE html>
<html>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;
	// Add the blog name.
	bloginfo( 'name' );


	?></title>
	
<meta name="title" content="NealDonnelly.com" />
<meta name="description" content="Neal's portfolio and various curios." />
<link rel="image_src" href="http://nealdonnelly.com/images/logo.png" />
	
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/jquery-1.6.2.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/index.js"></script>

<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory') ?>/js/shadowbox-3.0.3/shadowbox.css">
<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/shadowbox-3.0.3/shadowbox.js"></script>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-15328016-4']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>

<body <?php body_class(); ?>>
	<div id="browser_critique">
		<div id="browser_critique_content">
			<p>It appears you've come here with a browser that doesn't support fancy new CSS3 stuff. While this website will still work fine for you, it won't look as rad. The whole internet will be faster, prettier, more useful, and safer if you grab one of these new browsers. I personally recommend Google's Chrome because it updates itself automatically and never bothers you about it, but all the ones below are fantastic portals to the internet available for Mac and Windows.</p>
			<div id="browser_choices">
				<a href="http://www.google.com/chrome"><img src="<?php bloginfo('template_directory') ?>/images/chrome-logo.jpg" />Google Chrome</a>
				<a href="http://www.mozilla.org/firefox"><img src="<?php bloginfo('template_directory') ?>/images/firefox-logo.jpg" />Mozilla Firefox</a>
				<a href="http://www.apple.com/safari/download/"><img src="<?php bloginfo('template_directory') ?>/images/safari-logo.jpg" />Apple Safari</a>
			</div>
			<a href="" onclick='$(this).parents("#browser_critique").css("display", "none"); return false;' class="dismissal">Yeah yeah whatever get out of the way &raquo;</a>
		</div>
	</div>
	<div id="nav">
		<div id="logo_spacer"></div>
		<?php
		$pages = get_pages(array('sort_column' => 'menu_order'));
		foreach ($pages as &$page){   ?>
			<a href="#<?php echo $page -> post_name; ?>_page" class="nav_link"><?php echo ($page -> post_title); ?></a>
		<?php }	?>
		<a href="mailto:NealJMD@gmail.com">Email me</a>
	</div><!-- #nav -->

