$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------訂單點擊出現選單設定------------------------
	var mailList = $('.js-slidetoleft').each(function () {
		var listItem = $(this);
		var hammer = new Hammer(this);
		var minX = -275; // 右側按鈕寬度
		var maxX = 0;
		var lastPosX;

		hammer.on('tap', function (e) {
			listItem.animate({ left: maxX + "px" }, 100);
			listItem.addClass('active');
			resetOtherItems(listItem);
		});

		function resetOtherItems(activeItem) {
			$('.js-slidetoleft').not(activeItem).each(function () {
				var item = $(this);
				item.animate({ left: "0px" }, 100);
				item.removeClass('active');
			});
		}
	});
	$('.js-slidetoleft').click(function(){//關閉其他補印選單
		$(this).parent(".js-order-card-wrapper").siblings(".js-order-card-wrapper").find(".collapse").collapse("hide");
	})
	$(".js-order-card-function").find("button:not(.order-card-function-menu button)").click(function () {
		$(this).closest(".js-order-card-wrapper").find(".collapse").collapse("hide");
	});
	//---------------------優惠按鈕設定---------------------------
	$('.js-checkout-coupon-toggler').click(function () {
		if ($(this).hasClass("using")) {
			$('.js-checkout-coupon-toggler').removeClass('using');
			$('.js-checkout-coupon-toggler p').html('使用優惠');
		} else {
			$(this).toggleClass('active');
			$('.js-checkout-coupon').toggleClass('active');
			$('.js-checkout-coupon-list').toggleClass('active');
		}

	})
	$(".js-checkout-coupon-list-btn").click(function () {
		$('.js-checkout-coupon-toggler').removeClass('active');
		$('.js-checkout-coupon').removeClass('active');
		$('.js-checkout-coupon-toggler').addClass('using');
		$('.js-checkout-coupon-toggler p').html('取消優惠');
		$('.js-checkout-coupon-list').removeClass('active');
	})
	//---------------------filter按鈕設定------------------------
	$('.js-filter input').click(function () {
		$(this).toggleClass('active');
	})
	//---------------------多項目選單按鈕設定------------------------
	$(".js-top-nav-toggle-btn").click(function () {
		$(this).toggleClass('active');
		$(".js-top-nav-toggle").toggleClass('active');
		$(".js-top-nav").toggleClass('show');
	})
	//---------------------點餐左滑刪除設定------------------------
	var mailList = $('.js-slidedelete').each(function () {
		var hammer = new Hammer(this);
		var direction;
		var minX = -88//右側按鈕寬度
		var maxX = 0;
		var buying = false;
		var lastPosX;
		var listItem;

		hammer.on('panleft panright panend', function (e) {
			e.preventDefault();
			listItem = $(e.target).parents('.js-slidedelete');
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
			listItem = $(e.target).parents('.js-slidedelete');
			listItem.addClass('active');
			resetOtherItems(listItem);
		});

		function resetOtherItems(activeItem) {
			$('.js-slidedelete').not(activeItem).each(function () {
				var item = $(this);
				item.animate({ left: "0px" }, 100);
				item.removeClass('active');
			});
		}

		hammer.on('tap', function (e) {
			var listItem = $(e.target).parents('.js-slidedelete');
			listItem.addClass('active');
			resetOtherItems(listItem);
		});
	});

	//---------------------桌號設定------------------------
	$(".js-box-list-wrapper").find("button").click(function () {
		$(this).toggleClass("active");
	})
	//----------------列數切換-----------------
	$(".js-grid3").click(function () {
		$(".js-menu-card").find("li").removeClass("col-3").addClass("col-4");
	})
	$(".js-grid4").click(function () {
		$(".js-menu-card").find("li").removeClass("col-4").addClass("col-3");
	})
	//----------------搜尋按鈕-----------------
	$(".js-backdrop").click(function () {
		$(".js-search-dropdown").removeClass("active");
		$(".js-backdrop").removeClass("show");
	})
	$(".js-search-input").click(function () {
		$(".js-search-dropdown").toggleClass("active");
		$(".js-backdrop").toggleClass("show");
	})
	$(".js-search-btn").click(function () {
		$(".js-search-dropdown").removeClass("active");
		$(".js-backdrop").removeClass("show");
	})
	//----------------搜尋按鈕-----------------
	$('[data-bs-target="#checkout"]').click(function () {
		$(".side-tab").find("li").eq(0).find(".side-tab-item").click();
	})
//----------------電子發票設定-----------------
	$(".js-checkout-pay button").click(function () {
		$(".js-checkout-receipt input").removeClass("active");
		$(".js-pay-receipt").removeClass("show");
		$(".js-checkout-coupon").removeClass("hide");
		$(".js-checkout-keyboard").removeClass("w-100 flex-shrink-1");
		});
	$(".js-checkout-receipt input").click(function () {
		$(".js-checkout-coupon").addClass("hide");
		$(".js-checkout-keyboard").addClass("w-100 flex-shrink-1");
	});
})//JS尾端	

//-------------------備註判斷---------------------
function checkInput() {
	var input = document.getElementById('note-number');
	var inputValue = input.value.trim(); // 获取输入框的值，并去除前后的空格
	if (inputValue !== '') {
		$(".js-note-show").removeClass("d-none");
		$(".js-note-btn").addClass("d-none");
	} else {
		$(".js-note-show").addClass("d-none");
		$(".js-note-btn").removeClass("d-none");
	}
}
