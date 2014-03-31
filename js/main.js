jQuery.noConflict();
jQuery(document).ready(function($) {

    /** Sliding mobile menu */
    
    jQuery("nav.menu_container").append('<span class="mobile_menu_toggle">Menu</span>')
    jQuery(".mobile_menu_toggle").click(function () {
        if(jQuery(".mobile_menu_toggle").hasClass('open')){
            jQuery("nav.menu_container").animate({left: -250}, 500);
            jQuery(".mobile_menu_toggle").removeClass('open')
        }else {
            jQuery("nav.menu_container").animate({left: 0}, 500);
            jQuery(".mobile_menu_toggle").addClass('open');
        }
    });
        var mobileHeight = jQuery(window).height();
        jQuery(".menu_container").css("min-height", mobileHeight);
        
        function menuHeight() {
            var mobileHeight = jQuery(window).height();
            jQuery(".menu_container").css("min-height", mobileHeight);
        };
        var resizeTimer;
        jQuery(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(menuHeight, 100);
        });
       
	
});
