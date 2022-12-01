$( document ).ready(function() {
  $('.dropdown-content-desktop').children().slideUp();
  $('.mobile-drop-content li a').slideUp();
  $('.nav-mobile-contnet').slideUp();
});
 (function($) {
  $(function() {
      $('.dropdown-desktop').hover(
      function(){
        $(this).parent().find('.arrow').css({transform: 'rotate(' + 180 + 'deg)'});
          $(this).find("ul").children().slideDown('fast');

      },
      function(){
        $(this).parent().find('.arrow').css({transform: 'rotate(' + 0 + 'deg)'});
        $(this).find("ul").children().stop(true,false);
        $(this).find("ul").children().slideUp('fast');

        //sleep(100);
      }
    );
    $('.mobile-drop-link').click(function(){
      if ($(this).parent().find('.mobile-drop-content-link').is(':visible')){
        $(this).parent().find('.arrow').css({
            transform: 'rotate(' + 0 + 'deg)'
        });
        $(this).parent().find('.mobile-drop-content-link').slideUp();
        $('.mobile-link').slideDown();
      }
      else{
        $(this).parent().find('.arrow').css({
            transform: 'rotate(' + 180 + 'deg)'
        });
        $('.mobile-drop-content li a').slideUp();
        $('.mobile-link').slideUp();
        $(this).parent().find('.mobile-drop-content-link').slideDown();
      }

    });
    $('#nav-toggle').click(function() {
      $('.nav-mobile-contnet').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    $( window ).resize(function() {
        $('.nav-mobile-contnet').slideUp();
        $('#nav-toggle').removeClass('active');
      //let w = $(window).width();
      //if(w>982){
      //  $('#barList').slideDown('fast');
      //}
      //else {
      //  $(".side-dropdown-list").slideUp("fast");
      //  $('#barList').slideUp('fast');
      //}
    });
  });
})(jQuery);
/*
  document.addEventListener('scroll', function() {
      if (window.scrollY > 0)
      {
      document.getElementById("navBar").style.position = "fixed";
      document.getElementById("navBar").style.marginTop = "0px";
      }
      else if(document.getElementById("navBar").style.position != "absolute"){
        document.getElementById("navBar").style.position = "absolute";
        document.getElementById("navBar").style.marginTop = "150px";
      } // Value of scroll Y in px
  });
  */
