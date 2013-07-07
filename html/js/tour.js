$(window).load(function() {


	// var heroSize = $('.tourHero').css('height');
	// $('.tourSection').css('margin-top', heroSize);

	$(window).on("scroll", function() {
		var heroSize = $('.tourHero').css('height');
		var scroll = $(window).scrollTop();

		if (scroll > 300)
		{
			$('.tourName').css('opacity', '0');
			$('.cityStats').css('opacity', '0');
		}
		else if (scroll > 240)
		{
			$('.tourName').css('opacity', '0.1');
			$('.cityStats').css('opacity', '0.1');
		}
		else if (scroll > 200)
		{
			$('.tourName').css('opacity', '0.3');
			$('.cityStats').css('opacity', '0.3');
		}
		else if (scroll > 180)
		{
			$('.tourName').css('opacity', '0.5');
			$('.cityStats').css('opacity', '0.5');
		}
		else if (scroll > 160)
		{
			$('.tourName').css('opacity', '0.7');
			$('.cityStats').css('opacity', '0.7');
		}
		else if (scroll > 140)
		{
			$('.tourName').css('opacity', '0.85');
			$('.cityStats').css('opacity', '0.85');
		}
		else
		{
			$('.tourName').css('opacity', '1');
			$('.cityStats').css('opacity', '1');
		}
		if(scroll > heroSize-50)
		{

		}

	});

});