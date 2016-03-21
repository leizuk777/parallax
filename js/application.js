$(document).ready(function() {

    // $(document).on("scroll",function(){
    //   if($(document).scrollTop()>100){
    //     $("header").removeClass("large").addClass("small");
    //   } else{
    //     $("header").removeClass("small").addClass("large");
    //   }
    // });

    $('.box-wrapper').each(function(index, element) {

      setTimeout(function(){
          element.classList.remove('loading');
      }, index * 12000);

  });

  $('#fullpage').fullpage({
    menu: '.navbar',
    slidesNavigation: true,
    css3:true,
    sectionsColor: ['#afafaf', '#e0dfdf', '#afafaf', '#e0dfdf'],
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    afterRender: function(){},
    fixedElements: 'header',
    scrollBar:true
  });
});
