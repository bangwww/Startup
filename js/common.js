$(function() {
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".header_tittle h1").animated("fadeInDown", "fadeOut");
	$(".header_tittle p").animated("fadeInUp", "fadeOut");

});
$(document).ready(function() {


	$("section .section_header").animated("fadeInUp", "fadeOut");
	$(".s_services .item_service_wrap:first-child").animated("fadeInLeft", "fadeOutLeft");
	$(".s_services .item_service_wrap:last-child").animated("fadeInRight", "fadeOutRight");
	$(".s_blog .s_blog_item:nth-of-type(2n)").animated("fadeInRight", "fadeOutRight");
	$(".s_blog .s_blog_item:nth-of-type(1n)").animated("fadeInLeft", "fadeOutLeft");

	$(".popup_form").magnificPopup();
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".s_works #works_grid .mix .work_item_cont").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".work_item_descr").attr("id", "work_" + i);
	});

	var $menu = $(".top_line");

	if($(window).scrollTop()>100)
	$menu.removeClass("default").addClass("fixed");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() === 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
			if($(this).width()<992 )
			$(".top_mnu ul").slideUp();
		}
	});

	$(".top_mnu ul a, .top_logo a").click(function(){
		if($(window).width()<992)
			$(".top_mnu ul").slideUp();
	});

	$(".main_mnu_button").click(function(){
		if ($menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(window).scrollTop() === 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
		$(".top_mnu ul").slideToggle();
	});

	$(".top_mnu ul a, .top_logo a").mPageScroll2id();

	$("#works_grid").mixItUp();

	$(".owl-carousel.clients_carousel").owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000
	});

	$(".owl-carousel.about_carousel").owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1
			},
			748: {
				items: 2
			},
			998: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
});