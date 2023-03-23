"use strict";

$(function () {
  /*$(".js-slidetounlock-slider").draggable({
  	axis: 'x',
  	containment: 'parent',
  	drag: function(event, ui) {
  		if (ui.position.left > 150) {
  			$(".js-slidetounlock-txt").fadeOut(200);
  			setTimeout(function () {
  				$(".offcanvas-bottom").find("button").click();
  				$(".js-slidetounlock-txt").fadeIn(200);
  				$(".js-slidetounlock-slider").css("left","0");
  			}, 500);
  		} else {
  			// Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
  			// $("h2 span").css("opacity", 100 - (ui.position.left / 5))
  		}
  	},
  	stop: function(event, ui) {
  		if (ui.position.left < 151) {
  			$(this).animate({
  				left: 0
  			})
  		}
  	}
  });*/
  var el = document.querySelector('.js-slidetounlock-slider');
  var hammertime = new Hammer(el, {});
  hammertime.on('pan', function (ev) {
    if (ev.deltaX > 150) {
      $(".js-slidetounlock-txt").fadeOut(200);
      setTimeout(function () {
        $(".offcanvas-bottom").find("button").click();
        $(".js-slidetounlock-txt").fadeIn(200);
        el.style.transform = 'translateX(' + 0 + 'px)';
      }, 500);
    } else {
      el.style.transform = 'translateX(' + ev.deltaX + 'px)';
    }
  });
});
//# sourceMappingURL=slidetounlock.js.map
