var win = Titanium.UI.currentWindow;

Titanium.include("../db/staticdb.js");

var currentDistance = 2;
var FACTOR = 0.01862;
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

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

var km2 = Titanium.UI.createButton({
	title:"2 km",
	height: 11,
	width: "auto"
});

var km5 = Titanium.UI.createButton({
	title:"5 km",
	height: 11,
	width: "auto"
});

var km10 = Titanium.UI.createButton({
	title:"10 km",
	height: 11,
	width: "auto"
});

var back = Titanium.UI.createButton({
	title:"<",
	height: 11,
	width: "auto"
});

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var toolbar = Titanium.UI.createToolbar({
	items:[back, flexSpace, km2, flexSpace, km5, flexSpace, km10, flexSpace],
	bottom:0,
	height: 15,
	borderTop:true,
	borderBottom:false,
	translucent:true,
	barColor:'#999'
});	


var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,	
	animate:true,
	regionFit:true,
	userLocation:true
});


var updateLocation = function(){
	Titanium.Geolocation.getCurrentPosition(function(e)
		{
			Ti.API.log("info", e.error);
			if(e.coords != null){
				var longitude = e.coords.longitude;
				var latitude = e.coords.latitude;				
				currentRegion = {latitude:latitude, longitude:longitude, latitudeDelta:FACTOR, longitudeDelta: FACTOR};
				drawRegion();
			}
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
	var matchedHotels = searchNearBy(currentRegion, currentDistance);
	for (var i=0; i < matchedHotels.length; i++) {
		var annot = Titanium.Map.createAnnotation({
			latitude:matchedHotels[i].hotel.latitude,
	    	longitude:matchedHotels[i].hotel.longitude,
	    	title:matchedHotels[i].hotel.name,
		    subtitle: matchedHotels[i].distance +' km',
	    	pincolor:Titanium.Map.ANNOTATION_RED,
	    	rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	    	id: matchedHotels[i].hotel.id,
	    	animate:true,
		});
			mapview.addAnnotation(annot);
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

back.addEventListener("click", function(e){
	win.container.setActiveTab(1);
});

km2.addEventListener("click", function(e){
	mapview.removeAllAnnotations();
	currentDistance = 2;
	currentRegion.latitudeDelta = currentRegion.longitudeDelta = FACTOR,
	drawRegion();
});

km5.addEventListener("click", function(e){
	mapview.removeAllAnnotations();
	currentDistance = 5;
	currentRegion.latitudeDelta = currentRegion.longitudeDelta = FACTOR * 5,
	drawRegion();
});

km10.addEventListener("click", function(e){
	mapview.removeAllAnnotations();
	currentDistance = 10;
	currentRegion.latitudeDelta = currentRegion.longitudeDelta = FACTOR * 10,
	drawRegion();
});


mapview.addEventListener("click", function(e){
	if(e.clicksource === 'rightButton') {
		alert("id:"+e.annotation.id);
		
		var style = Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
		var presentation = Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
		var w = Ti.UI.createWindow({
			url: "map/hotel_detail.js",
			currentPin: {map: mapview, annot: e.annotation}
		});

		w.open({
			modal:true,
			modalTransitionStyle:style,
			modalStyle:presentation,
			navBarHidden:true
		});
	}
});

win.add(mapview);
win.add(toolbar);
updateLocation();