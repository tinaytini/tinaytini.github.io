$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: false
    });
    $('ul.our_team_list').on('click', 'li:not(.our_team_tabs_active)', function() {
        $(this)
          .addClass('our_team_tabs_active').siblings().removeClass('our_team_tabs_active')
          .closest('div.container').find('li.team_slide').removeClass('team_slide_active').eq($(this).index()).addClass('team_slide_active');
      });

  });