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
		    smartSpeed: 1000,
		    stageElement: 'ul',
		    itemElement: 'li',
		    stageClass: 'nav',
		    mouseDrag: false,
				touchDrag: false,
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
    	},
    	450: {
    		items: 2,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    mouseDrag: false,
		touchDrag: false,
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
    	820: {
    		items: 4,
    	},
    	992: {
    		items: 5,
    	},
    	1200: {
    		items: 6,
    	},
    	1400: {
    		items: 7,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    mouseDrag: false,
		touchDrag: false,
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
    	640: {
    		items: 3,
    	},
    	820: {
    		items: 4,
    	},
    },
    dots: false,
    nav: true,
    navText: ['',''],
    smartSpeed: 1000,
    stageElement: 'ul',
    itemElement: 'li',
    stageClass: 'nav',
    mouseDrag: false,
		touchDrag: false,
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
    	820: {
    		items: 4,
    	},
    	992: {
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
    mouseDrag: false,
		touchDrag: false,
    margin: 2,
  });

});