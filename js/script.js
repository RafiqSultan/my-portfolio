let list_html = document.getElementsByClassName('card-item');
document.querySelector('#listhtml').onclick = () => {
    for (let i = 0; i < list_html.length; i++) {
        $('.projects .card-projects .card-item.php').addClass("hidden");
    }
}
document.querySelector('#listphp').onclick = () => {
    for (let i = 0; i < list_html.length; i++) {
        $('.projects .card-projects .card-item.html_and_css').addClass("hidden");
    }
}





$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // // toggle menu/navbar script
    // $('.listbtn').click(function() {
    //     // let element = document.getElementsByClassName('card-item');
    //     let element = document.getElementsByClassName('html_and_Css');
    //     for (let i = 0; i < element.length; i++) {
    //         $('.projects .card-projects .card-item.html_and_Css').toggleClass("active");
    //     }
    //     $('.projects .card-projects .card-item.php').toggleClass("hidden");

    //     // $('.projects .card-projects .card-item').toggleClass("active");

    // });
    // $('.phpbtn').click(function() {
    //     let element = document.getElementsByClassName('php');
    //     for (let i = 0; i < element.length; i++) {
    //         $('.projects .card-projects .card-item').toggleClass("active");
    //     }
    //     // $('.projects .card-projects .card-item.html_and_Css').toggleClass("hidden");

    //     // $('.projects .card-projects .card-item').toggleClass("active");

    // });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer"],
        typeSpeed: 200,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer"],
        typeSpeed: 200,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    // $('.carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: false
    //         },
    //         600: {
    //             items: 2,
    //             nav: false
    //         },
    //         1000: {
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
});