jQuery(function($) {

 

         jQuery("a.event_open").click(
          function(ev) {
            ev.preventDefault(); //To prevent redirection
            jQuery.colorbox({inline: true, href: '#cventForm' });
             jQuery('.webform-component--cventform-id input').val(jQuery(this).attr('data-eventid'));
             jQuery('.webform-component--event-title input').val(jQuery(this).attr('data-eventtitle'));
             jQuery('.webform-component--event-venue input').val(jQuery(this).attr('data-venue'));
             jQuery('.webform-component--event-session input').val(jQuery(this).attr('data-session'));


          });


         jQuery("a.event_alumnae_open").click(
          function(ev) {
            ev.preventDefault(); //To prevent redirection
            var hr = jQuery(this).attr("href");
            jQuery.colorbox({inline: true, href: '#EOI_Form' });
          

          });


         jQuery("a.signup_open").click(
          function(ev) {
            ev.preventDefault(); //To prevent redirection
            jQuery.colorbox({inline: true, href: '#Newsletter_Form' });
          

          });



});


 