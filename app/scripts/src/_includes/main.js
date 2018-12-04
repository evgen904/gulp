window.onload = function() {
	$('#lightgallery').lightGallery();




	/*$('[data-fancybox]').fancybox({
	    youtube : {
	        controls : 0,
	        showinfo : 0
	    },
	    vimeo : {
	        color : 'f00'
	    }
	});*/


	//$("a[rel=example_group]").fancybox();




	// $('.owl-carousel').owlCarousel({
	//     items:2,
	//     lazyLoad:true,
	//     loop:true,
	//     margin:10
	// });
















};


var videoSlider;



if ($('.owl-carousel-wrap').data('video')=='1') {
	videoSlider = true;
}
else {
	videoSlider = false;
}


$(document).ready(function() {


	$('#sync1').lightGallery({
		selector: '.item'
	});


    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 6; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        //startPosition: 1,
        lazyLoad:true,
        slideSpeed: 2000,
        nav: true,
        animateOut: 'fadeOut',
        margin: 0,
        autoplay: false, 
        dots: true,
        loop: false,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            lazyLoad:true,
            nav: true,
            startPosition: 0,
            smartSpeed: 200,
            margin: 2,
            slideSpeed: 500,
            slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

        //}).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {

        var current = el.item.index;
        sync2.data('owl.carousel').to(current, 200, true);


        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");




        var videoStream = document.querySelector('.player-wrapper');
        if (videoStream) {
            videoStream.children[0].pause();
        }



        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        /*var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }*/





        //end block

        /*sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();*/

        /*if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }*/






    }

    function syncPosition2(el) {
        /*if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }*/
        //console.log(123);
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);

        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        var arrSlide = [start,end];
        var arr = [start,end];
        var closest = arr.sort( (a, b) => Math.abs(number - a) - Math.abs(number - b) )[0];



        var positionSlide;

        if (arrSlide[0]===closest) {
            positionSlide = 'left';
        }
        if (arrSlide[1]===closest) {
            positionSlide = 'right';
        }

        if (positionSlide=='left') {
            sync2.data('owl.carousel').to(start-1, 200, true);
        }
        else if (positionSlide=='right') {
            sync2.data('owl.carousel').to(start+1, 200, true);
        }





        //console.log(sync2.find('.owl-item.active').length);
        



        // if (number==end) {
        // 	sync2.data('owl.carousel').to(number-4, 300, true);
        // }
        // else if (number==end-1) {
        // 	sync2.data('owl.carousel').to(number-3, 300, true);
        // }
        // else if (number==end-2) {
        // 	sync2.data('owl.carousel').to(number-2, 300, true);
        // }



        // else if (number==start) {
        // 	sync2.data('owl.carousel').to(number-1, 300, true);
        // }
        // else if (number==start+1) {
        // 	sync2.data('owl.carousel').to(number-2, 300, true);
        // }
        // else if (number==start+2) {
        // 	sync2.data('owl.carousel').to(number-3, 300, true);
        // }













    });



    $('.play-s').on('click',function(){
        sync2.data('owl.carousel').to(3, 300, true);
    });


    




});