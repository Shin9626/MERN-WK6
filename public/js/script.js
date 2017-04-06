/*

My Custom JS
============

*/

$(function(){
  var $thumbs = $('.animate1');
  var $jumbo_btn = $('.animate2');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  var nav = $('.navbar-fixed-top');
  new WOW().init();

  $(window).scroll(function(){
    animate_elems();
  });

  function animate_elems() {
    // calculate distance from top of window
    wintop = $(window).scrollTop();
    // toggle navbar effect
    if(wintop >= 120) {
      nav.addClass('effect');
    } else {
      nav.removeClass('effect');
    }

    /*var parlltop = $('.parallax').offset().top;
    var mparlltop = -(wintop+winheight-parlltop-400)*0.8;
    $('.parallax').css({
      'background-position':0+'px '+mparlltop+'px'
    });*/


    // check animate1
    $thumbs.each(function(index){
      $thumb = $(this);
      // if already animated skip to the next item
      if($thumb.hasClass('slideInUp')) { return true; }
      // element's distance from top of page in pixels
      else {
        topcoords = $thumb.offset().top;
        if(wintop > (topcoords - winheight)*.75) {
          // animate when top of the window is 3/4 above the element
          $thumb.addClass('slideInUp');
          switch(index){
            case 0:
            $thumb.addClass('animate_delay0');
            break;
            case 1:
            $thumb.addClass('animate_delay1');
            break;
            case 2:
            $thumb.addClass('animate_delay2');
            break;
            case 3:
            $thumb.addClass('animate_delay3');
            break;

            case 4:
            $thumb.addClass('animate_delay4');
            break;

            case 5:
            $thumb.addClass('animate_delay5');
            break;

            case 6:
            $thumb.addClass('animate_delay6');
            break;

            case 7:
            $thumb.addClass('animate_delay7');
            break;

            case 8:
            $thumb.addClass('animate_delay8');
            break;

            case 9:
            $thumb.addClass('animate_delay9');
            break;
          } //end switch-case
        } //end if
      } //end else
    }); //end each selector
  } // end animate_elems()
});
