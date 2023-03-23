"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------左滑刪除設定------------------------

  var mailList = $('.js-slidetoleft').each(function () {
    var hammer = new Hammer(this);
    var direction;
    var minX = -275; //右側按鈕寬度

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
      listItem.addClass('active');
      resetOtherItems(listItem);
    }

    hammer.on('panstart', function (e) {
      listItem = $(e.target).parents('.js-slidetoleft');
      listItem.addClass('active');
      resetOtherItems(listItem);
    });

    function resetOtherItems(activeItem) {
      $('.js-slidetoleft').not(activeItem).each(function () {
        var item = $(this);
        item.animate({
          left: "0px"
        }, 100);
        item.removeClass('active');
      });
    }

    hammer.on('tap', function (e) {
      var listItem = $(e.target).parents('.js-slidetoleft');
      listItem.addClass('active');
      resetOtherItems(listItem);
    });
  }); //---------------------捲軸設定------------------------

  var scrollbar = document.querySelector('.scrollbar');
  var content = document.querySelector('.scroll-content');
  var isScrolling = false;

  var toggleScrollbarVisibility = function toggleScrollbarVisibility() {
    if (isScrolling) {
      scrollbar.classList.remove('active');
    } else {
      scrollbar.classList.add('active');
    }
  };

  content.addEventListener('scroll', handleScroll);
  var hammer = new Hammer(content);
  hammer.on('panmove', function () {
    isScrolling = true;
    toggleScrollbarVisibility();
  });
  scrollbar.addEventListener('wheel', function () {
    handleScroll();
  });

  var handleScroll = function handleScroll() {
    isScrolling = true;
    toggleScrollbarVisibility();
  };

  content.addEventListener('scroll', handleScroll); //---------------------桌號設定------------------------

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
}); //JS尾端
//# sourceMappingURL=script.js.map
