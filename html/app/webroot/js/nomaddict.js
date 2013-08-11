$(document).ready(function() {
	$(this).scrollTop(0);
});

$(window).load(function() {

	$(window).on("scroll", function() {
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var footHeight = $('.uno').outerHeight(true);
		var logoHeight = $('.logoContainer').outerHeight(true);
		var bottomOfLogo = $('.logoContainer').offset().top+logoHeight;
		var bottomOfHeader = $('.homeHeader').offset().top+$('.homeHeader').outerHeight(true);
		bottomOfHeader -= 60;

		if (scroll+logoHeight > bottomOfHeader) {
			var top = $('.logoContainer').offset().top;
			var unotop = $('.uno').offset().top;
			var dostop = $('.dos').offset().top;
			var trestop = $('.tres').offset().top;
			var quatrotop = $('.quatro').offset().top;
			var cincotop = $('.cinco').offset().top;
			var seistop = $('.seis').offset().top;
			var sietetop = $('.siete').offset().top;
			var ochotop = $('.ocho').offset().top;

			$('.logoContainer').css('top', bottomOfHeader-logoHeight).css('position', 'absolute');
			$('.uno').css('top', bottomOfHeader-(footHeight*.25)).css('position', 'absolute');
			$('.dos').css('top', bottomOfHeader).css('position', 'absolute');
			$('.tres').css('top', bottomOfHeader+(footHeight)).css('position', 'absolute');
			$('.quatro').css('top', bottomOfHeader+(footHeight*1.25)).css('position', 'absolute');
			$('.cinco').css('top', bottomOfHeader+(footHeight*2)).css('position', 'absolute');
			$('.seis').css('top', bottomOfHeader+(footHeight*2.25)).css('position', 'absolute');
			$('.siete').css('top', bottomOfHeader+(footHeight*3)).css('position', 'absolute');
			$('.ocho').css('top', bottomOfHeader+(footHeight*3.25)).css('position', 'absolute');
		}
		if (scroll+logoHeight < bottomOfHeader) {
			$('.logoContainer').css('top', '2%').css('position', 'fixed');
			if (windowHeight > 448) {
				$('.uno').css('top', '29em').css('position', 'fixed');
				$('.dos').css('top', '31em').css('position', 'fixed');
				$('.tres').css('top', '40em').css('position', 'fixed');
				$('.quatro').css('top', '42em').css('position', 'fixed');
				$('.cinco').css('top', '51em').css('position', 'fixed');
				$('.seis').css('top', '53em').css('position', 'fixed');
				$('.siete').css('top', '62em').css('position', 'fixed');
				$('.ocho').css('top', '64em').css('position', 'fixed');
			}
			else {
				$('.uno').css('top', '10em').css('position', 'fixed');
				$('.dos').css('top', '13em').css('position', 'fixed');
				$('.tres').css('top', '18em').css('position', 'fixed');
				$('.quatro').css('top', '20em').css('position', 'fixed');
				$('.cinco').css('top', '26em').css('position', 'fixed');
				$('.seis').css('top', '28em').css('position', 'fixed');
				$('.siete').css('top', '35em').css('position', 'fixed');
				$('.ocho').css('top', '37em').css('position', 'fixed');
			}
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
		if (scroll > 240) {
			$('.cinco').show();
		}
		else {
			$('.cinco').hide();
		}
		if (scroll > 300) {
			$('.seis').show();
		}
		else {
			$('.seis').hide();
		}
		if (scroll > 360) {
			$('.siete').show();
		}
		else {
			$('.siete').hide();
		}
		if (scroll > 400) {
			$('.ocho').show();
		}
		else {
			$('.ocho').hide();
		}
	});

});