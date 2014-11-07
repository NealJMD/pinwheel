<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

		<div id="content_container">

			<?php
			$pages = get_pages();
			foreach ($pages as &$page){ ?>
				<div id="<?php echo $page -> post_name; ?>_page" class="content_page" onclick="return false;">
					<div class="blade_top"></div>
					<div class="content">
						<h1><?php echo $page -> post_title; ?></h1>
						<?php echo $page -> post_content; ?>
					</div>
				</div>				
			<?php }	?>
			<div id="hub"></div>
		</div><!-- #container -->


<?php get_footer(); ?>
