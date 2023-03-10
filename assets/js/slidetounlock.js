$(function() {

	$(".slidetounlock-slider").draggable({
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
	});
	
	$('.slidetounlock-slider')[0].addEventListener('touchmove', function(event) {
	    event.preventDefault();
	    var el = event.target;
	    var touch = event.touches[0];
	    curX = touch.pageX - this.offsetLeft - 73;
	    if(curX <= 0) return;
	    if(curX > 150){
	    	$('.slidetounlock').fadeOut(200);
	    }
	   	el.style.webkitTransform = 'translateX(' + curX + 'px)'; 
	}, false);
	
	$('.slidetounlock-slider')[0].addEventListener('touchend', function(event) {	
	    this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
	    this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
	    this.style.webkitTransform = 'translateX(0px)';
	}, false);

});