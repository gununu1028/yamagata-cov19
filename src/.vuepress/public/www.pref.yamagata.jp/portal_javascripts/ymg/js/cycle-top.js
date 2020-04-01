// JavaScript Document
jQuery(function() {
    var url = document.URL;
    var local = '';

    if (/yamagata/.test(url.slice(0, 20))) {
        local = '/yamagata';
    }
    //click
    //   jQuery.ajaxSetup({ cache: false }); 
    jQuery("#slide-img_a").load(local + "/template/inc_slideshow.html", function() {
            jQuery('#jquery-cycle').cycle({
                fx: 'fade',
                speed: 1000,
                timeout: 6000,
                slideResize: false,
                after: function() {
                    $('#jquery-cycle-title').html($(this).find('img').attr('alt'));
                },
                sync: 1,
                pager: '#jquery-cycle-nav'
            });
            jQuery('#jquery-cycle-toggle').click(function() {
                    jQuery('#jquery-cycle').cycle('toggle');
                    jQuery('#jquery-cycle-toggle p').toggle();
            });
    });
});