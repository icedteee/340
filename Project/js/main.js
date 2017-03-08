//************************** OUR CODE*****************************************//
function check(){
  var picNum = 6

  for (var i = 0; i < picNum; i++) {
    wild(i);

  }
}

function wild(number) {
  var image = [
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },{
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    },
    {
      "name": "",
      "loc": "img/01.jpg"
    }
  ];
  var random = Math.floor(Math.random() * 10) + 1);


document.getElementById("image-" + number).src= image[random].loc;

}

//***************************************************************************//

function main() {

(function () {
   'use strict';

   /*====================================
    Main Navigation Stick to Top when Scroll
    ======================================*/
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#tf-menu').addClass('stick');
      } else {
          $('#tf-menu').removeClass('stick');
      }
  }

  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});
}());
}
main();
