Titanium.include("../db/staticdb.js");
var win = Titanium.UI.currentWindow;

var data = [{
	title:'Stars',
	hasChild: true
},{
	title:'With pool',
	hasChild: true
},{
	title:'With parking',
	hasChild: true
}];

var categoriesTable = Titanium.UI.createTableView({
	data:data,
	scrollable:true,
	top:0
});

win.add(categoriesTable);
