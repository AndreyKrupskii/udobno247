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
	$('.menu-options').click(function(e) {
		e.preventDefault();
		if($(this).parent().hasClass('open')){
			return;
		}
		else{
			$('.menu-item').removeClass('open');
			$(this).parent().addClass('open');
			$('.cat-submenu').slideUp(400).addClass('hidden');
			$(this).next().slideDown(400).removeClass('hidden');
		}
	});
	var smallOwlSlider = $('.main__tab .main__tab__shops');
	smallOwlSlider.owlCarousel({
		autoWidth: true,
		items: 4,
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
	$('.main__tab .next-small-slide').click(function(){
		smallOwlSlider.trigger('next.owl.carousel');
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
	

	var owl = $('#unic-section .slider-wrap');
	owl.owlCarousel({
		items: 1,
		mouseDrag: false,
		smartSpeed: 300,
		dotsSpeed: 200,
	});
	$('#unic-section .owl-controls')
		.prepend('<span class="dots-caption">Как это работает</span>')
		.append('<i class="remove icon"></i>');
	$('#unic-section .btn-next').click(function(){
		owl.trigger('next.owl.carousel');
	});
	$('#unic-section .repeat-slide').click(function(e){
		e.preventDefault();
		owl.trigger('to.owl.carousel',0);
	})
	$('#unic-section .btn-prev').click(function(){
		owl.trigger('prev.owl.carousel');
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

var smallOwlSlider = $('.slider-item-5 .main__tab__shops');
	smallOwlSlider.owlCarousel({
		autoWidth: true,
		items: 4,
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
	$('.slider-item-5 .next-small-slide').click(function(){
		smallOwlSlider.trigger('next.owl.carousel');
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