Titanium.include("../db/staticdb.js");
var win = Titanium.UI.currentWindow;

var getData = function(hotel){
	var hotelData = {
		hotelname: hotel.name,
		hasChild:true,
		height: "auto"
	};

	if(hotel.header) {
		hotelData.header=hotel.header
	}
	return hotelData;
}


var data = [];
for (var i=0; i < hotels.length; i++) {
	
	var hotelRow = Titanium.UI.createTableViewRow(getData(hotels[i]));
	Ti.API.info(hotels[i].thumbnail);
	var thumb = Ti.UI.createImageView({
		image: hotels[i].thumbnail,
		height: 60,
		width: 60,
		top: 0,
		left: 0
	});
	var name = Ti.UI.createLabel({
		text:hotels[i].name,		
		font: {
			fontSize:16,
			fontWeight:'bold'
		},
		textAlign:'left',
		height:16,
		width: 'auto',
		left: 65,
		top: 2
	});
	var addrs = Ti.UI.createLabel({
		text:hotels[i].address,
		width:'auto',
		color:'#666666',
		font: {
			fontSize:12
		},
		height: "auto",
		left:65,
		top:20
	});
	hotelRow.add(thumb);
	hotelRow.add(name);
	hotelRow.add(addrs);
	data.push(hotelRow);
}

var search = Titanium.UI.createSearchBar({
	showCancel:false,
	hintText: "Search hotel by name"
});

var tableview = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute: 'hotelname',
});
win.add(tableview);