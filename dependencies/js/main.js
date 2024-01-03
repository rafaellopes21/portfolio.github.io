(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

// Typed Initiate
function typedTextAnimated(){
    if ($('.typed-text-output').length == 1) {
        let typed_strings = $('.typed-text').text();
        let typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
}

// Spinner
function spinner(removeBlur = false) {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
        if(removeBlur){
            document.querySelector(".main-content-portfolio").classList.remove('blur-content');
        }
    }, 100);
}

function setResumeDownload(lang){
    let downloadPt = document.querySelector("#cv-download");
    let downloadEn = document.querySelector("#resume-download");
    if(lang == 'en'){
        downloadPt.setAttribute("hidden", "hidden");
        downloadEn.removeAttribute("hidden");
    }
    if(lang == 'pt'){
        downloadEn.setAttribute("hidden", "hidden");
        downloadPt.removeAttribute("hidden");
    }
}

//Start portfolio
function releasePortfolio(lang){
    typedTextAnimated();
    setResumeDownload(lang);
    spinner(true);
}