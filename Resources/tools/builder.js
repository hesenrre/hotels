var buildTab = function(p) {
	
	var win = Titanium.UI.createWindow({
		title:p.win.title,
		backgroundColor:'#fff',
		url: p.win.url
	});
	var tab = Titanium.UI.createTab({
		icon: p.tab.icon,//''
		title: p.tab.title,
		window:win
	});
	if(p.container){
		p.container.addTab(tab);
	}
	return tab;
}