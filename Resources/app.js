
Titanium.include("tools/builder.js");

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
buildTab({
		win: {
			title: "Near by",
			url: "tabs/location.js",
			tabBarHidden: true
		},
		tab: {
			icon: "KS_nav_views.png",
			title: "Near By"
		},
		container: tabGroup
});

buildTab({
	win: {
		title: "Home",
		url: "tabs/home.js"
	},
	tab: {
		icon: "KS_nav_views.png",
		title: "Home"
	},
	container: tabGroup
});

buildTab({
	win: {
		title: "Categories",
		url: "tabs/categories.js"
	},
	tab: {
		icon: "KS_nav_views.png",
		title: "Categories"
	},
	container: tabGroup
});

tabGroup.setActiveTab(1);
// open tab group
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});
