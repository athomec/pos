"use strict";

$(function () {
  $(".js-slidetounlock-slider").draggable({
    axis: 'x',
    containment: 'parent',
    drag: function drag(event, ui) {
      if (ui.position.left > 150) {
        $(".js-slidetounlock-txt").fadeOut(200);
        setTimeout(function () {
          $(".offcanvas-bottom").find("button").click();
          $(".js-slidetounlock-txt").fadeIn(200);
          $(".js-slidetounlock-slider").css("left", "0");
        }, 500);
      } else {// Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
        // $("h2 span").css("opacity", 100 - (ui.position.left / 5))
      }
    },
    stop: function stop(event, ui) {
      if (ui.position.left < 151) {
        $(this).animate({
          left: 0
        });
      }
    }
  });
});
//# sourceMappingURL=slidetounlock.js.map
