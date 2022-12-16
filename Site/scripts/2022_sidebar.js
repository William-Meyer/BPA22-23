
(function($) {
  $(function() {
    $('.side-dropdown').click(function(){
      var target = $(event.target), article;
      console.log(target);
      if((target.is('.side-dropdown a'))){
      if($(this).find($('.side-dropdown-list')).is(':visible')){
        $(this).parent().find('.sidebarArrow').css({
            transform: 'rotate(' + 0 + 'deg)'
        });
      }
      else{
        $('.sidebarArrow').css({
            transform: 'rotate(' + 0 + 'deg)'
        });
        $(this).parent().find('.sidebarArrow').css({
            transform: 'rotate(' + 180 + 'deg)'
        });
      }
        $(this).children($('.side-drop-content')).children().addClass('side-active');
        $(".side-dropdown-list:not(.side-active)").slideUp();
        $(this).children($('.side-drop-content')).children().removeClass('side-active');
        $(this).find($('.side-dropdown-list')).slideToggle();
      }
    });
    $('#bar-toggle').click(function() {
      if($(window).width()<983){
      $('#barList').slideToggle();}
    });
    $('#bar-toggle').on('click', function() {
      this.classList.toggle('active-sidebar');
    });
  });
})(jQuery);
$( window ).resize(function() {
  let w = $(window).width();
  if(w>982){
    $('#barList').slideDown('fast');
  }
  else {
    $(".side-dropdown-list").slideUp("fast");
    $('#barList').slideUp('fast');
  }
});
