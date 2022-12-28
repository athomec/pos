"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------左滑刪除設定------------------------

  var mailList = $('.js-slidetoleft').each(function () {
    var hammer = new Hammer(this);
    var direction;
    var minX = -82;
    var maxX = 0;
    var buying = false;
    var lastPosX;
    hammer.on('panleft panright panend', function (e) {
      e.preventDefault();
      var listItem = $(e.target).parents('.js-slidetoleft');
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
  }); //----------------列數切換-----------------

  $(".js-grid3").click(function () {
    $(".js-menu-card").find("li").removeClass("col-3").addClass("col-4");
  });
  $(".js-grid4").click(function () {
    $(".js-menu-card").find("li").removeClass("col-4").addClass("col-3");
  }); //----------------搜尋按鈕-----------------

  $(".js-search-input").click(function () {
    $(".js-search-dropdown").toggleClass("active");
  });
  $(".js-search-btn").click(function () {
    $(".js-search-dropdown").removeClass("active");
  }); //----------------gotop功能-----------------

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //若目前的位置距離網頁頂端>100px
      $('.gotop').fadeIn('fast');
    } else {
      $('.gotop').stop().fadeOut('fast');
    }

    var index = 0; //各單元區塊順序

    var st = $(window).scrollTop(); //現在捲軸位置

    var wh = $(window).height(); //視窗高度
  }); //RESIZE();

  /*$(window).resize(function () {
  	RESIZE();
  });*/

  function RESIZE() {
    WINDOWH = $(window).height();
    WINDOW = $(window).width();
  }
}); //JS尾端
//# sourceMappingURL=script.js.map
