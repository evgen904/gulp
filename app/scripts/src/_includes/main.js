

$(function(){



    //$('#lightgallery').lightGallery();



    $('#thumbGalleryDetai').lightGallery({
        selector: '.item',
        thumbWidth:120,
        thumbMargin: 3
    });

    /*
    Thumb Gallery
    */
    var $thumbGalleryDetail = $('#thumbGalleryDetai'),
        $thumbGalleryThumbs = $('#thumbGalleryThumbs'),
        flag = false,
        duration = 300;

    $thumbGalleryDetail
        .owlCarousel({
            items: 1,
            margin: 10,
            lazyLoad:true,
            nav: true,
            dots: false,
            loop: false,
            startPosition: 0,
            animateOut: 'fadeOut',
            navText: []
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index-1, duration, true]);
                flag = false;

                var current = e.item.index;
                $thumbGalleryThumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");

                var videoStream = document.querySelector('.player-wrapper');
                if (videoStream) {
                    videoStream.children[0].pause();
                }

            }
        });

    $thumbGalleryThumbs
        .on('initialized.owl.carousel', function() {
            $thumbGalleryThumbs.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            margin: 2,
            items: 6,
            lazyLoad:true,
            nav: false,
            center: false,
            dots: false,
            startPosition: 0,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    item: 4
                },
                960: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1280: {
                    items: 6
                }
            },
        })
        .on('click', '.owl-item', function() {
            $thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $thumbGalleryDetail.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
                var current = e.item.index;
                $thumbGalleryThumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");

                var videoStream = document.querySelector('.player-wrapper');
                if (videoStream) {
                    videoStream.children[0].pause();
                }

            }
        });

    



});
