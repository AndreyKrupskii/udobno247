$(document).ready(function(){
	$('#new-header .header-top .dropdown').dropdown();
	$('#new-header .dots').dropdown();
	$('#new-header .header-bottom .dropdown').dropdown();
	$('#new-header .btn-category').click(function(){
		if($('#new-header .cat-menu').hasClass('hidden')){
			$('#new-header .cat-menu').slideDown(200).removeClass('hidden');
			$('#new-header .menu-arr').addClass('active');
		} else{
			$('#new-header .cat-menu').slideUp(200).addClass('hidden');
			$('#new-header .menu-arr').removeClass('active');
		}
	});
	$('#new-header .menu-options').click(function(){
		if($(this).parent().hasClass('open')){
			return;
		}
		$('.menu-item .cat-submenu').slideUp(200);
		setInterval(function(){
			$('.menu-item .cat-submenu').addClass('hidden');
		}, 250);
		$('.menu-item').removeClass('open');
		$(this).parent().addClass('open');
		$(this).parent().find('.cat-submenu').slideDown(200).removeClass('hidden');
		setInterval(function(){
			$(this).parent().find('.cat-submenu').removeClass('hidden');
		}, 250);
		
	});
	$(document).mouseup(function (e) {
		e.preventDefault();
		var container = $("#new-header .header-bottom__item--cat");
		if (container.has(e.target).length === 0){
			$('#new-header .cat-menu').slideUp(200).addClass('hidden');
			$('#new-header .menu-arr').removeClass('active');
		}
	});


	var retina = window.devicePixelRatio > 1 ? true : false;
	function setSect(){
		if ($(window).height()>852){
			$('#new-homepage .main__tab').css('height', '100%');
			$('#new-homepage .slider-tab').css('position', 'absolute');
			var vh = $(window).height();
			$('#new-homepage #unic-section').height(vh-232);
		} else{
			$('#new-homepage .main__tab').css('height', 'auto');
			$('#new-homepage .slider-tab').css('position', 'reletive');
			$('#new-homepage #unic-section').height('auto');
		}
	}
	setSect()
	function setTabsSameHeight(){
		if(retina){
			$('#unic-section .slider-item').height($('#unic-section .home-tab').height()+75);
		} else{
			$('#unic-section .slider-item').height($('#unic-section .home-tab').height()+130);
		}
	}
	setTabsSameHeight();
	

	function setAsideHeight(){
		if(!retina){
			$('.new-design .cat-menu').height($('.new-design').height()-$('.new-design #new-header').height());
		}
	};
	

	var owl = $('#unic-section .slider-wrap');
	owl.owlCarousel({
		items: 1,
		// loop: false, 
		mouseDrag: false,
		smartSpeed: 300,
		dotsSpeed: 200,
		// autoplay: true,
		// autoplayTimeout: 10000
	});
	$('#unic-section .owl-controls')
		.prepend('<span class="dots-caption">Как это работает</span>')
		.append('<i class="remove icon"></i>');
	$('#unic-section .btn-next').click(function(){
		owl.trigger('next.owl.carousel');
	});
	$('#unic-section #repeat-slider').click(function(){
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
	$('#unic-section #to-slider').click(function(e){
		e.preventDefault();
		$('#unic-section .home-tab').removeClass('active-tab').addClass('hidden-tab');
		$('#unic-section .main__tab--w.slider-tab').addClass('active-tab').removeClass('hidden-tab');
	});



	$(window).resize(function(e) {
		setSect();
		setAsideHeight();
		if(retina){
			$('#unic-section .slider-item').height($('#unic-section .home-tab').height()+75);

		} else{
			$('#unic-section .slider-item').height($('#unic-section .home-tab').height()+130);
		}		
	});
	setAsideHeight(); 
});