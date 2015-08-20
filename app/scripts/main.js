'use strict';

// jshint devel:true
console.log('Welcome to Duck Hunt!');

// timing variables
var lostDuckFadeOutTime = 300;
var gameSpeed = 500;              // 2 fps

function isAlive(duck) {
  return duck.hasClass('left') || duck.hasClass('right');
}

function updateDuck(duck) {

  // bounce left to right
  if (duck.offset().left < 0) {
    duck.removeClass('left').addClass('right');
  }

  // bounce right to left
  if (duck.offset().left > $(document).width() - 200) {
    duck.removeClass('right').addClass('left');
  }

  // Set the vertical position of the duck.
  // Note that we set bottom equal to top to move the duck up exactly 1 duck
  // height and this is "smoothed" out by the CSS3 transition settings.
  var newBottom = $(document).height() - duck.offset().top;
  duck.css('bottom', newBottom);

  // flap those wings
  duck.toggleClass('flap');

  // if duck has escaped, fade it out and recycle it.
  if (duck.offset().top < 0) {
    duck.fadeOut(lostDuckFadeOutTime, function() {
      duck.removeClass('left right');
      // TODO: recycle the duck
    });
  }
}

// update the score, duck positions, orientations, and state
function step() {

  $('.duck').each(function (i, duck) {
    duck = $(duck);
    if (isAlive(duck)) {
      updateDuck(duck);
    }
    else {
      console.log('Skipping lost or dead duck');
    }
    console.log('duck: top=' + duck.offset().top + ', class=' + duck.attr('class'));
  });

  // move each left facing duck a little further to the left
  $('.duck.left').each(function (i, duck) {
    duck = $(duck);
    duck.css('left', duck.offset().left - 30);
  });

  // move each right facing duck a little further to the right
  $('.duck.right').each(function (i, duck) {
    duck = $(duck);
    duck.css('left', duck.offset().left + 30);
  });
}

// get everything going.
$(function() {
  setInterval(step, gameSpeed);
});
