$(window).load(function(){
    $("body").delay(400).removeClass('is-loading');
});
$(document).ready(function(){
	// dropdown header top
	if($('#new-header .header-top .dropdown .text .shop-i').is($('.shop-i'))){
		$('#new-header .header-top .dropdown').addClass('white');
		$('#new-header .header-bottom .dropdown').addClass('white');
	}
	$('#new-header .header-top .dropdown').dropdown();
	$('#new-header .header-top .dropdown .item').click(function(){
		$('#new-header .header-top .dropdown').addClass('white');
		$('#new-header .header-bottom .dropdown').addClass('white');
	});
	$('#new-header .dots').dropdown();
	$('#new-header .header-bottom .dropdown').dropdown();
	$('#new-header .header-bottom .dropdown .item').click(function(){
		$('#new-header .header-bottom .dropdown').addClass('white');
		$('#new-header .header-top .dropdown').addClass('white');
	});

	// Set main section height
	function setMainSectH(){
		var windowHeight = $(window).height();
		var headerHeight = $('#new-header').height();
		var sectHeight = windowHeight - headerHeight;
		$('#unic-section').height(sectHeight+'px');
	}
	setMainSectH();
	$(window).resize(function(e) {
		setMainSectH();
		setSliderOffset();
		setBtnOffset();
	});

	//  sidebar
	$('body .ui.sidebar')
		.sidebar({
	    context: $('body .bottom.segment')
	  })
	  .sidebar('attach events', 'body .btn-category')
	$('.cat-menu .menu-item:nth-child(1)').addClass('open');
	$('.menu-options').click(function(e) {
		e.preventDefault();
		if($(this).parent().hasClass('open')){
			return;
		}
		else{
			$('.menu-item').removeClass('open');
			$(this).parent().addClass('open');
			$('.cat-submenu').slideUp(400);
			$(this).next().slideDown(400).removeClass('hidden');
		}
	});
	var smallOwlSlider1 = $('.home-tab .main__tab__shops');
	smallOwlSlider1.owlCarousel({
		autoWidth: true,
		items: 4,
		loop: true,
		responsive : {
			0:{
				items: 3
			},
			768:{
				items:3
			},
			980:{
				items: 5
			},
			1400:{
				items: 6
			},
		}
		
	});
	$('.home-tab .next-small-slide').click(function(){
		smallOwlSlider1.trigger('next.owl.carousel');
	});
	function setSliderOffset(){
		var l = $('.ui.container').css('margin-left');
		$('.main__tab__shops').css('margin-left', l);
	}
	setSliderOffset();
	function setBtnOffset() {
		var l = parseInt($('.ui.container').css('margin-left'));
		$('.how-it-work').css('right', l);
	}
	setBtnOffset();

	var owl1 = $('#unic-section .slider-wrap');
	owl1.owlCarousel({
		items: 1,
		loop: false,
		mouseDrag: false,
		smartSpeed: 300,
		dotsSpeed: 200,
	});
	$('#unic-section .owl-controls')
		.prepend('<span class="dots-caption">Как это работает</span>')
		.append('<i class="remove icon"></i>');
	$('#unic-section .btn-next').click(function(){
		owl1.trigger('next.owl.carousel');
		setTimeout(function(){
			if($('.slider-item-5').parent().hasClass('active')){
				$('.btn-next').fadeOut();
			} else{
				$('.btn-next').fadeIn();
			}
		},200);
	});
	$('#unic-section .repeat-slide').click(function(e){
		e.preventDefault();
		owl1.trigger('to.owl.carousel',0);
		setTimeout(function(){
			if($('.slider-item-5').parent().hasClass('active')){
				$('.btn-next').fadeOut();
			} else{
				$('.btn-next').fadeIn();
			}
		},200);
	})
	$('#unic-section .btn-prev').click(function(){
		owl1.trigger('prev.owl.carousel');
		setTimeout(function(){
			if($('.slider-item-5').parent().hasClass('active')){
				$('.btn-next').fadeOut();
			} else{
				$('.btn-next').fadeIn();
			}
		},200);
	});
	$('#unic-section .slider-tab').addClass('hidden-tab');
	$('#unic-section .remove').click(function(e){
		e.preventDefault();
		$('#unic-section .main__tab--w.slider-tab').removeClass('active-tab').addClass('hidden-tab');
		$('#unic-section .home-tab').removeClass('hidden-tab').addClass('active-tab');
	});
	$('#unic-section .to-slider').click(function(e){
		e.preventDefault();
		$('#unic-section .home-tab').removeClass('active-tab').addClass('hidden-tab');
		$('#unic-section .main__tab--w.slider-tab').addClass('active-tab').removeClass('hidden-tab');
	});

	
	var smallOwlSlider2 = $('.slider-item-5 .main__tab__shops');
	smallOwlSlider2.owlCarousel({
		autoWidth: true,
		items: 4,
		// loop: false,
		loop: true,
		responsive : {
			0:{
				loop: true,
				items: 3

			},
			768:{
				loop: true,
				items:3
			},
			980:{
				loop: true,
				items: 5
			},
			1400:{
				loop: true,
				items: 6
			},
		}
	});
	$('.slider-item-5 .next-small-slide').click(function(){
		smallOwlSlider2.trigger('next.owl.carousel');
	});

	function setMinContHeight(){
		var windowHeight = $(window).height();
		var headerHeight = $('#new-header').height();
		var footerHeight = $('#new-footer').height()
		var sectHeight = windowHeight - headerHeight - footerHeight;
		$('.cont-for-prod').css('min-height', sectHeight);
	};
	setMinContHeight();
	$(window).resize(function(event) {
		setMinContHeight();
	});

	
});