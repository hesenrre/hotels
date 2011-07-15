var buildTab = function(p) {
	
	var win = Titanium.UI.createWindow({
		title:p.win.title,
		backgroundColor:'#000',
		url: p.win.url,
		tabBarHidden: (p.win.tabBarHidden ? true : false),
		navBarHidden: true
	});
	var tab = Titanium.UI.createTab({
		icon: p.tab.icon,//''
		title: p.tab.title,
		window:win
	});
	if(p.container){
		p.container.addTab(tab);
		win.container = p.container
	}
	return tab;
}