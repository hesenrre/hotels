Titanium.include("../db/staticdb.js");

var FACTOR = 0.01862;
var win = Titanium.UI.currentWindow;
var currentRegion = null;
var myLocationAnn = null;

var isAndroid = false;
if (Titanium.Platform.name == 'android') {
	isAndroid = true;
}


Ti.Geolocation.preferredProvider = "gps";
if (isIPhone3_2_Plus())
{
	Ti.Geolocation.purpose = "GPS demo";
}
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HUNDRED_METERS;
Titanium.Geolocation.distanceFilter = 10;



var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,	
	animate:true,
	regionFit:true,
	userLocation:true				
});


var updateLocation = function(){
	Titanium.Geolocation.getCurrentPosition(function(e)
		{			
			var longitude = e.coords.longitude;
			var latitude = e.coords.latitude;				
			currentRegion = {latitude:latitude, longitude:longitude, latitudeDelta:FACTOR, longitudeDelta: FACTOR};
			drawRegion();
		}
	);
};

var activateCurrentLocListener = function() {
	Titanium.Geolocation.addEventListener('location', function() {
		updateLocation();
	});
};

var drawRegion = function(){
    
	mapview.setLocation(currentRegion);
	var matchedHotels = searchNearBy();
	for (var i=0; i < matchedHotelsngth; i++) {
		var currentParams = {
			latitude:matchedHotels[i].latitude,
			longitude:matchedHotels[i].longitude,
			title:matchedHotels.name,			
			animate:true			
		};
		mapview.addAnnotation(Titanium.Map.createAnnotation(currentParams));
	};
		
} 


function isIPhone3_2_Plus()
{
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0],10);
		var minor = parseInt(version[1],10);
		
		// can only test this support on a 3.2+ device
		if (major > 3 || (major == 3 && minor > 1))
		{
			return true;
		}
	}
	return false;
}

	   	
win.add(mapview);
updateLocation();




