//************************** OUR CODE*****************************************//
var checkImgArr = [];
var checkDiscArr = [];

function checkImage() {
  var picNum = 7;
  var i = 0;

  for (i; i < picNum; i++) {
    wildImage(i);
  }
}

function wildImage(number) {
  var image = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
  var random = Math.floor(Math.random() * 10);
  var isfound = false;

for (var i = 0; i < checkImgArr.length; i++) {
  if (checkImgArr[i] == random) {
    isfound = true;
  }
}
  if (isfound) {
    wildImage(number);
  } else {
    checkImgArr.push(random);
    document.getElementById("image-" + number).src = "img/" + image[random] + ".png";
  }
}

function checkDisc() {
  var discNum = 4;
  var i = 0;

  for (i; i < discNum; i++) {
    wildText(i);
  }
}

function wildText() {
  var text = [
    {
      "http" :"http://www.theverge.com/a/apple-iphone-7-review-vs-iphone-7-plus",
      "title" : "iphone 7 vs. 7 plus",
      "id" : "0",
      "Description" : "How powerful truly is Iphone 7, this article breaks down what the most powerful features. Iphone 7 is the most interesting, opinionated and most powerful phone in the current market, the performance and batteries have evolved much faster then its era."
    },
    {
      "http" : "http://appleinsider.com/articles/16/09/23/apples-iphone-7-camera-delivers-nice-slice-of-enhancements-but-iphone-7-plus-takes-the-cake",
      "title" : "Camera",
      "id" : "1",
      "Description" : "Iphone 7\'s camera strides in quality, specially in dark and light environment. For people who love manual control of their photography, iOS 10 also now enables raw camera data capture by third party apps, allowing a whole new level of tinkering and experimentation."
    },
    {
      "http" : "http://appleinsider.com/futures/iphone-7",
      "title" : "CPU Features",
      "id" : "2",
      "Description" : "Features and Design have been part of a major work in iPhone 7. Apple introduced A10 fusion chip which is efficient and gives extra hour or two of battery. iPhone 7 have incorporate a variety of other camera enhancements, from a higher resolution front facing FaceTime camera to a rear shooter with a larger aperture and bigger pixels for better capturing detail in poorly lit settings, a particular weakness among mobile cameras."
    },
    {
      "http" : "http://www.macrumors.com/roundup/iphone-7/",
      "title" : "Battery Life",
      "id" : "3",
      "Description" : "Performance and Battery life are big issues in today\'s phone, not for long, IPhone 7 have focused this issue by installing the new A10, and upgrading its performance to enhance the battery life and the performance the user gets, also the Ram was upgraded since iPhone 6, it now holds 3gb which makes phone much more efficient."
    },
    {
      "http" : "http://www.digitaltrends.com/mobile/apple-iphone-7-news-2-2/",
      "title" : "Price Points",
      "id" : "4",
      "Description" : "iPhone 7 and its price, what you get. We\'ve put all the features to test to see if this phone holds up to its price. Surprisingly it performs every feature that apple promised like perfect. IPhone 7 is also water resistant with IP67 rating. This means that you can drop your phone up to 1 meter of water for about 30 min and it wont effect your phone at all."
    },
    {
      "http" : "http://www.popsci.com/iphone-7-review",
      "title" : "Testing the limits",
      "id" : "5",
      "Description" : "Testing of iPhone 7 and its limitation. We\'ve tested the phone to tough testing, including watching stream with highest brightness and with highest quality and and loudest volume. Apple\'s removal of headphone jack can prevent people from buying, but look at its potential, it will allow headphones to evolve, making them efficient, and easier to carry."
    }
  ];
  var random = Math.floor(Math.random() * 5);
  var isfound = false;

for (var i = 0; i < checkDiscArr.length; i++) {
  if (checkDiscArr[i] == random) {
    isfound = true;
  }
}
  if (isfound) {
    wildText(number);
  } else {
    checkDiscArr.push(random);
    document.getElementById("image-" + number).src = "img/" + image[random] + ".png";
  }
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
