Titanium.include("../db/staticdb.js");
var win = Titanium.UI.currentWindow;

var categoriesTable = Titanium.UI.createTableView({
	data:[{title:'Stars'},{title:'Swiming Pool'},{title:'No Swiming Pool'},{title:'Parking'},{title:'No parking'}],
	scrollable:true,
	top:0
});

win.add(categoriesTable);
