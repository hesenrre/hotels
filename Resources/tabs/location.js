var win = Titanium.UI.currentWindow;

var isAndroid = false;
if (Titanium.Platform.name == 'android') {
	isAndroid = true;
}


var regionAtlanta = {latitude:33.74511,longitude:-84.38993,animate:true,latitudeDelta:0.04, longitudeDelta:0.04};
var atlantaParams = {
		latitude:33.74511,
		longitude:-84.38993,
		title:"Atlanta, GA",
		subtitle:'Atlanta Braves Stadium\nfoo',
		animate:true,
		
		//rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		myid:3 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	};

var atlanta = Titanium.Map.createAnnotation(atlantaParams);
var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:33.74511, longitude:-84.38993,latitudeDelta:0.01862, longitudeDelta:0.01862},
	animate:true,
	regionFit:true,
	userLocation:true,		
	annotations:[atlanta]
});



win.add(mapview);
