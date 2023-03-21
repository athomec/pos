"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------左滑刪除設定------------------------

  var mailList = $('.js-slidetoleft').each(function () {
    var hammer = new Hammer(this);
    var direction;
    var minX = -278; //右側按鈕寬度

    var maxX = 0;
    var buying = false;
    var lastPosX;
    var listItem;
    hammer.on('panleft panright panend', function (e) {
      e.preventDefault();
      listItem = $(e.target).parents('.js-slidetoleft');
      var positionX = e.deltaX;
      positionX = positionX + lastPosX;

      if (e.type == 'panleft' && positionX >= -90 && positionX <= 0) {
        direction = e.type;
        listItem.css('left', positionX);
      } else if (e.type == 'panright' && positionX <= 30 && positionX >= -50) {
        direction = e.type;
        listItem.css('left', positionX);
      } else if (e.type == 'panend') {
        snap(direction, listItem);
      }
    });

    function snap(direction, listItem) {
      lastPosX = direction == 'panleft' ? minX : maxX;
      buying = lastPosX == minX ? true : false;
      console.log(buying);
      listItem.animate({
        left: lastPosX + "px"
      }, 100);
    }

    hammer.on('panstart', function (e) {
      // 當滑動開始時，呼叫函式來將其他元素移回原來位置
      resetOtherItems(listItem);
    });

    function resetOtherItems(activeItem) {
      // 遍歷所有 .js-slidetoleft 元素
      $('.js-slidetoleft').each(function () {
        var item = $(this);

        if (item[0] !== activeItem[0]) {
          // 如果元素不是當前滑動的元素，則將其移回原來位置
          item.animate({
            left: "0px"
          }, 100);
        }
      });
    }
  }); //---------------------桌號設定------------------------

  $(".js-box-list-wrapper").find("button").click(function () {
    $(this).toggleClass("active");
  }); //----------------列數切換-----------------

  $(".js-grid3").click(function () {
    $(".js-menu-card").find("li").removeClass("col-3").addClass("col-4");
  });
  $(".js-grid4").click(function () {
    $(".js-menu-card").find("li").removeClass("col-4").addClass("col-3");
  }); //----------------搜尋按鈕-----------------

  $(".js-backdrop").click(function () {
    $(".js-search-dropdown").removeClass("active");
    $(".js-backdrop").removeClass("show");
  });
  $(".js-search-input").click(function () {
    $(".js-search-dropdown").toggleClass("active");
    $(".js-backdrop").toggleClass("show");
  });
  $(".js-search-btn").click(function () {
    $(".js-search-dropdown").removeClass("active");
    $(".js-backdrop").removeClass("show");
  });
  /*$(".scrollbar").scroll(function () {
  	$(this).addClass("show");
  	var stopListener = $(".scrollbar").mouseup(function () { // listen to mouse up
  		$(this).removeClass("show");
  		stopListner(); // Stop listening to mouse up after heard for the first time 
  	});
  });*/
}); //JS尾端
//# sourceMappingURL=script.js.map
