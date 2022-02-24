		//for menu scrolling effect..
		$(window).on('scroll', function(){
			if($(window).scrollTop()){
				$('#nav').addClass('white');
			}else{
				$('#nav').removeClass('white');
			}
		});


	//for menu active class..	
    $(document).ready(function(){
        $('#nav ul li a.nav-link').on('click', function(){
            $(this).toggleClass('active');
        });
    });


	//for pre loader...
    setTimeout(function(){
    $('.loader-bg').fadeToggle();
    }, 2000);

	// for slider section
	const slideshow = $('.slider-element');
	let count = 1;
	setInterval(() => {
		count ++;
		let element = $('.slider-element');
		
		let currentElement = $('.current');
		currentElement.removeClass('current');
		if(count > slideshow.length){
			$(slideshow[0]).addClass('current');
			count = 1;
		}else{
			currentElement.next(element).addClass('current');
		}


		}, 4000);

		new WOW().init();

		// for counter section
		$(document).ready(function(){
			$(".counter1").counterUp({
				delay: 20,
				time: 2000

			});
		});