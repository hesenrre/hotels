Titanium.include("../../db/staticdb.js");
var win = Ti.UI.currentWindow;
if(Ti.Platform.name != 'android'){
    win.showNavBar();
}

var currentHotel = searchById(win.id);

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'100%',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true
});

var image = Ti.UI.createImageView({
	image: currentHotel.image,
	height: 150,
	top: 10
});

scrollView.add(image);

var labAddrs = Titanium.UI.createLabel({
	text: "Address:",
	font:{fontSize: 14, fontWeight: "bold"},
	top: 170,
	width: "85%",
	textAlign: "left",
	height:16
});

var stars = Titanium.UI.createImageView({
	image: "/images/3star.png",
	top: 170,
	left: 50,
	height: 16
});

scrollView.add(stars);

var addrs = Titanium.UI.createTextArea({
    value:currentHotel.address,
    height:50,
    width:"85%",
    top:190,
    editable: false,
    font:{fontSize:12},
    color:'#888',
    textAlign:'left',
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
});


var labTel = Titanium.UI.createLabel({
	text: "Phone:",
	font:{fontSize: 14, fontWeight: "bold"},
	top: 250,
	width: "85%",
	textAlign: "left",
	height:16
});

var tel = Titanium.UI.createTextField({
	value: currentHotel.telephone,
	backgroundColor: "#fff",
	color: "#888",
	editable: false,
	enabled: false,
	font: {fontSize: 12},
	height: 25,
	width: "85%",
	top: 270,
	borderWidth: 2,
	borderColor:'#bbb',
    borderRadius:5,
    paddingLeft: 6,
    paddingRight: 6
});

var labMap = Titanium.UI.createLabel({
	text: "Location:",
	font:{fontSize: 14, fontWeight: "bold"},
	top: 305,
	width: "85%",
	textAlign: "left",
	height:16
});

if(Ti.Platform.name != 'android'){
    var map = Titanium.Map.createView({
        mapType: Titanium.Map.STANDARD_TYPE,
        region: {latitude:currentHotel.latitude, longitude:currentHotel.longitude, 
                latitudeDelta:0.003, longitudeDelta:0.003},
        animate:true,
        regionFit:true,
        userLocation:true,
        height: 100,
        width: "85%",
        top: 330,
        borderWidth: 2,
        borderColor:'#bbb',
        borderRadius:5
    });
    scrollView.add(map);
}

var mapDet = Titanium.UI.createButton({
    backgroundImage: "/images/trans_bg.png",
	height:100,
	width: "85%",
	top:330
});

var spacer = Titanium.UI.createLabel({
	text: "",
	font:{fontSize: 14, fontWeight: "bold"},
	top: 435,
	width: "85%",
	textAlign: "left",
	height:16
});

scrollView.add(labAddrs);
scrollView.add(addrs);
scrollView.add(labTel);
scrollView.add(tel);
scrollView.add(labMap);
scrollView.add(spacer);
scrollView.add(mapDet);
win.add(scrollView);

var annot = Titanium.Map.createAnnotation({
	latitude:currentHotel.latitude,
    longitude:currentHotel.longitude,
    title:currentHotel.name,
    subtitle: currentHotel.address,
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
});
if(Ti.Platform.name != 'android'){
    map.addAnnotation(annot);
}
mapDet.addEventListener("click", function(e) {

	var style = Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
	var presentation = Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
	var w = Ti.UI.createWindow({
		url: "map_detail.js",
		currentPin: {
			lat: currentHotel.latitude,
			lon: currentHotel.longitude,
			name: currentHotel.name,
			addrs: currentHotel.address
		}
	});

	w.open({
		modal:true,
		modalTransitionStyle:style,
		modalStyle:presentation,
		navBarHidden:true
	});
});
