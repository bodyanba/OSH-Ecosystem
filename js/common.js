$(document).ready(function() {

	$owlMain = $('.owl-main');
	function initializeMain() {
	  if (window.matchMedia('(max-width: 767.98px)').matches) {
	  	$owlMain.addClass('owl-carousel');
	    $owlMain.owlCarousel({
		  	responsive: {
		    	0: {
		    		items: 1,
		    	},
		    	375: {
		    		items: 2,
		    	},
		    	576: {
		    		items: 3,
		    	},
		    },
    		dots: false,
		    smartSpeed: 1000,
		    stageElement: 'ul',
		    itemElement: 'li',
		    stageClass: 'nav',
		    margin: 22,
			});
	  } else {
	    $owlMain.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
	    $owlMain.find('.owl-stage-outer').children().unwrap();
	  }
	};
	$(window).resize(initializeMain);
	initializeMain();

  $('.owl-1').owlCarousel({
  	responsive: {
    	0: {
    		items: 1,
		    mouseDrag: true,
				touchDrag: true,
    	},
    	450: {
    		items: 2,
		    mouseDrag: false,
				touchDrag: false,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    margin: 2,
  });

  $('.owl-2').owlCarousel({
  	responsive: {
    	0: {
    		items: 1,
    	},
    	450: {
    		items: 2,
    	},
    	640: {
    		items: 3,
    	},
    	992: {
    		items: 4,
    	},
    	1200: {
    		items: 6,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    margin: 2,
  });

	$('.owl-3').owlCarousel({
  	responsive: {
    	0: {
    		items: 1,
    	},
    	450: {
    		items: 2,
    	},
    	768: {
    		items: 4,
		    mouseDrag: false,
				touchDrag: false,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    margin: 2,
  });

  $('.owl-4').owlCarousel({
  	responsive: {
    	0: {
    		items: 1,
    	},
    	450: {
    		items: 2,
    	},
    	640: {
    		items: 3,
    	},
    	768: {
    		items: 4,
    	},
    	992: {
    		items: 6,
		    mouseDrag: false,
				touchDrag: false,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    margin: 2,
  });

  $('.owl-4-1').owlCarousel({
  	responsive: {
    	0: {
    		items: 1,
    	},
    	450: {
    		items: 2,
    	},
    	768: {
    		items: 3,
		    mouseDrag: false,
				touchDrag: false,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    margin: 2,
  });

  $('.tab-content > *').addClass('tab-pane');

  $('[data-toggle="popover"]').popover({
	  trigger: 'hover',
	  placement: 'bottom',
	});
	$('[data-toggle="popover"]').on('click', function(e) {
	  e.stopPropagation();
	});

	$('#nav-1 .block').on('click', function() {
		$('[href="#nav-2"]').trigger('click');
		$owlMain.trigger('to.owl.carousel', 1);
	});
	$('#nav-2 .block').on('click', function() {
		$('[href="#nav-3"]').trigger('click');
		$owlMain.trigger('to.owl.carousel', 2);
	});
	$('#nav-3 .block').on('click', function() {
		$('[href="#nav-4"]').trigger('click');
		$owlMain.trigger('to.owl.carousel', 3);
	});

});




