$(document).ready(function(){
/* 
=============================================== 
JS Code before Minified
=============================================== 
*/
  $('.fadeOut').owlCarousel({
	  items: 1,
	  animateOut: 'fadeOut',
	  loop: true,
	  margin: 10,
	  mouseDrag: false,
	});

	$('.works-sab-slide').owlCarousel({
	  center: false,
	  items:1,
	  loop:false,
	  margin:15,
	  nav:true,
	  dots:false,
	  responsive:{
	      600:{
	          items:3
	      }
	  }
	});

	$('.testimony-sab-slide').owlCarousel({
	  items: 1,
	  animateOut: 'fadeOut',
	  loop: true,
	  margin: 10,
	  mouseDrag: false,
	});

	var rect = $('#parallax')[0].getBoundingClientRect();
	var mouse = {x: 0, y: 0, moved: false};

	$("#parallax").mousemove(function(e) {
	  mouse.moved = true;
	  mouse.x = e.clientX - rect.left;
	  mouse.y = e.clientY - rect.top;
	});
	 
	// Ticker event will be called on every frame
	TweenLite.ticker.addEventListener('tick', function(){
	  if (mouse.moved){
	    parallaxIt(".par", -30);
	    parallaxIt(".mon", -50);
	  }
	  mouse.moved = false;
	});

	function parallaxIt(target, movement) {
	  TweenMax.to(target, 0.3, {
	    x: (mouse.x - rect.width / 2) / rect.width * movement,
	    y: (mouse.y - rect.height / 2) / rect.height * movement
	  });
	}

	$(window).on('resize scroll', function(){
	  rect = $('#parallax')[0].getBoundingClientRect();
	});

/* 
=============================================== 
Google Maps
=============================================== 
*/

	//Google Maps JS
	//Set Map

	function initialize() {
		var myLatlng = new google.maps.LatLng(53.3333,-3.08333);
		var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
		var mapOptions = {
			zoom: 11,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	//Callout Content
	var contentString = 'Some address here..';
	//Set window width + content
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 500
	});

	//Add Marker
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: imagePath,
		title: 'image title'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

	//Resize Function
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});