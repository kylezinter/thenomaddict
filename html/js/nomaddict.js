$(document).ready(function() {
	
		$(window).on("scroll", function() {
		var scroll = $(window).scrollTop();

		if (scroll > 440) {
			var top = $('.logoContainer').offset().top;
			var unotop = $('.uno').offset().top;
			var dostop = $('.dos').offset().top;
			var trestop = $('.tres').offset().top;
			var quatrotop = $('.quatro').offset().top;
			var cincotop = $('.cinco').offset().top;
			var seistop = $('.seis').offset().top;

			$('.logoContainer').css('top', top).css('position', 'absolute');
			$('.uno').css('top', unotop).css('position', 'absolute');
			$('.dos').css('top', dostop).css('position', 'absolute');
			$('.tres').css('top', trestop).css('position', 'absolute');
			$('.quatro').css('top', quatrotop).css('position', 'absolute');
			$('.cinco').css('top', cincotop).css('position', 'absolute');
			$('.seis').css('top', seistop).css('position', 'absolute');
		}
		else {
			$('.logoContainer').css('top', '30%').css('position', 'fixed');
			$('.uno').css('top', '55%').css('position', 'fixed');
			$('.dos').css('top', '57%').css('position', 'fixed');
			$('.tres').css('top', '70%').css('position', 'fixed');
			$('.quatro').css('top', '74%').css('position', 'fixed');
			$('.cinco').css('top', '85%').css('position', 'fixed');
			$('.seis').css('top', '90%').css('position', 'fixed');
		}

		if (scroll > 0) {
			$('.uno').show();
		}
		else {
			$('.uno').hide();
		}
		if (scroll > 80) {
			$('.dos').show();
		}
		else {
			$('.dos').hide();
		}
		if (scroll > 120) {
			$('.tres').show();
		}
		else {
			$('.tres').hide();
		}
		if (scroll > 190) {
			$('.quatro').show();
		}
		else {
			$('.quatro').hide();
		}
		if (scroll > 230) {
			$('.cinco').show();
		}
		else {
			$('.cinco').hide();
		}
		if (scroll > 270) {
			$('.seis').show();
		}
		else {
			$('.seis').hide();
		}
	});
	
});