/* To do:
   • User ARIA roles to improve accessability. See: http://accessibility.athena-ict.com/aria/examples/tabpanel2.shtml
*/

var app = {};

app.tabs = (function() {
    var module = {};

    module.init = function() {

        var $tabs            = $('.tabs');
        var $tabList         = $('.tabs__list');
        var $tabItem         = $('.tabs__item');
        var $tabItemActive   = $('.tabs__item--active');
        var $tabLink         = $('.tabs__link');
        
        var width            = $(window).width();

        var tabSwitcher = function() {
            // On tab link click
            $tabLink.on('click', function(e) {
                var currentAttrValue = jQuery(this).attr('href');

                // Show/Hide Tabs
                $('.tabs ' + currentAttrValue).addClass('tabs__area--active').siblings().removeClass('tabs__area--active')

                // Change/remove current tab to active
                $(this).parent('li').addClass('tabs__item--active').siblings().removeClass('tabs__item--active');

                e.preventDefault();
            });
        }

        var tabToggle = function() {
            $tabItem.on('click', function(e) {
                $(this).parent($tabList).toggleClass('tabs__list--open');
            });
        }

        var tabController = function() {
            tabToggle();
        }

        /* We cache window width size to prevent the resize event triggering on mobile scroll
        See: http://stackoverflow.com/questions/9361968/javascript-resize-event-on-scroll-mobile */
        $(window).resize(function() {
            var width = $(window).width();
            if ($(window).width() != width) {
                width = $(window).width();
                tabController();
            }
        });

        tabController();
        tabSwitcher();

    };
    return module;
})();

app.tabs.init();