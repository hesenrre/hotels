var win = Titanium.UI.currentWindow;

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var close = Titanium.UI.createButton({
	title: "close",
	height:33,
	width:"auto"
});

var toolbar1 = Titanium.UI.createToolbar({
	items:[flexSpace, close],
	bottom:0,
	borderTop:true,
	borderBottom:false,
	translucent:true,
	barColor:'#999'
});	


var map = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:win.currentPin.lat, longitude:win.currentPin.lon, 
            latitudeDelta:0.005, longitudeDelta:0.005},
    animate:true,
    regionFit:true,
    userLocation:true,
    top: 0
});
win.add(map);
win.add(toolbar1);

var annot = Titanium.Map.createAnnotation({
	latitude:win.currentPin.lat,
    longitude:win.currentPin.lon,
    title:win.currentPin.name,
    subtitle: win.currentPin.addrs,
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
});

map.addAnnotation(annot);

close.addEventListener("click", function(e){
	win.close();
});
