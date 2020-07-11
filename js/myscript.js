
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {

	$(window).on('scroll load', function () {
		let scrollPos = $(window).scrollTop();
		if (scrollPos > 300) {
			$('header').addClass('active').css('transition','.3s');
		} else {
			$('header').removeClass('active');
		}

		$('.fadein').each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 200) {
				$(this).addClass('active');
			}
		});


	});

	$(window).on('load', function () {
		$('aside,.top01,header').addClass('is_show');
	});

	$('.top02 h2').click(function () {
		$('.top02 .item').slideToggle();
		$('.top02 h2 span').toggleClass('active');
	});





});