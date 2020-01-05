
$(function () {
    'use strict';
    // Vars
    var width       = 900,
        slidingTime = 1000,
        showTime    = 4000,
        slideNum    = 1,
        slideClick  = 300,
        slides      = $('.slides'),
        slide       = slides.find('.slide'),
        left        = $('.left'),
        right       = $('.right'),
        bullet      = $('.bullets .bullet'),
        sliding;
    
    // Sliding Function
    function slideMe() {
      right.fadeOut();
        left.fadeOut();
        slides.animate({'margin-left': '-=' + width }, slidingTime, function () {
            right.fadeIn();
            left.fadeIn();
            slideNum++;
            bullet.removeClass('active');
            $('#bullet' + (slideNum)).addClass('active');
            if (slideNum === slide.length) {
                slideNum = 1;
                $('#bullet' + (slideNum)).addClass('active');
                slides.css('margin-left', 0);
            }
        });
    }
    
    // Right Navigator
    right.on("click", function () {
        right.fadeOut(100);
        left.fadeOut(100);
        slides.animate({'margin-left': '-=' + width }, slideClick, function () {
            right.fadeIn();
            left.fadeIn();  
            slideNum++;
            bullet.removeClass('active');
            $('#bullet' + (slideNum)).addClass('active');
            if (slideNum === slide.length) {
                slideNum = 1;
                $('#bullet' + (slideNum)).addClass('active');
                slides.css('margin-left', 0);
            }
        });
    });
    // Left Navigator
    left.on("click", function () {
        right.fadeOut(100);
        left.fadeOut(100);
        slides.animate({'margin-left': '+=' + width }, slideClick, function () {
            right.fadeIn();
          left.fadeIn();
            slideNum--;
            bullet.removeClass('active');
            $('#bullet' + (slideNum)).addClass('active');
            if (slideNum === 0) {
                slideNum = (slide.length - 1);
                slides.css('margin-left', "-" + (width * (slide.length - 2)) + "px");
            }
        });
    });

    // Firing up Sliding
    function letMeSlide() {
        sliding = setInterval(function () {
            slideMe();
        }, showTime);
    }
    
    // Puasing The Slider
    function stopMe() {clearInterval(sliding); }
   
    // Mouse Effect Configurations
    slides.on('mouseenter', stopMe).on('mouseleave', letMeSlide);
        
    // bullets Click
    bullet.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        slideNum = $(this).data('slide');
        if ($(this).hasClass('active')) {
            slides.animate({'margin-left': (bullet.length - $(this).data('image')) * width }, slideClick);
        }
    });

    // Lets Rock & Roll :D
    letMeSlide();
});