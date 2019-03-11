function initialize() {
	var myCenter = new google.maps.LatLng(6.907287, 79.855142);
	var mapProp = {
		center : myCenter,
		zoom : 16,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap2"), mapProp);
	var marker = new google.maps.Marker({
		position : myCenter,
		icon : 'imgs/map_marker.png'
	});
	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize); 

