Titanium.include("../db/staticdb.js");
var win = Titanium.UI.currentWindow;

var data = [];
for (var i=0; i < hotels.length; i++) {
	if(hotels[i].header) {
		data.push({
			title: hotels[i].name,
			hasChild: true,
			header: hotels[i].header
		});
	} else {
		data.push({
			title: hotels[i].name,
			hasChild: true
		});
	}
}

var search = Titanium.UI.createSearchBar({
	showCancel:false,
	hintText: "Search hotel by name"
});

var tableview = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute:'title'
});
win.add(tableview);
// var search = Titanium.UI.createSearchBar({
	// barColor:'#000',
	// showCancel:true,
	// height:43,
	// top:0
// });
// 
// // create table view
// var hotelsTable = Titanium.UI.createTableView({
	// data:[],
	// scrollable:true,
	// top:30
// });
// 
// win.add(search);
// win.add(hotelsTable);
// 
// search.addEventListener('change', function(e)
// {
	// matchedHotels = searchByName(search.value);
	// hotelsTable.data=[];
	// for (var i = matchedHotels.length - 1; i >= 0; i--){
    	// hotelsTable.appendRow({title:matchedHotels[i].name}); 
	// };
// 	
	// Titanium.API.info('search bar: you type ' + e.value + ' act val ' + search.value);
// 
// });



