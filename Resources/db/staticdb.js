var FACTOR = 0.01862;
hotels=[{
	name:'Fiesta Inn Viaducto',
	header: 'F',
	stars:3,
	pool:false,
	parking:true,
	address:'Av. Insurgentes Sur 553, Col. Escandon, Benito Juarez, México DF',
	telephone:'52767400',
	latitude:19.40019,
	longitude:-99.170778,
	image:'images/INS_fiestainn_ciudadmexico_hotel.jpg',
	thumbnail:'images/INS_fiestainn_ciudadmexico_hotel.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1400
	},{
		room:'double',
		price:1500
	}]
},{
	name:'Residencia Polanco',
	header: 'R',
	stars:3,
	pool:false,
	parking:true,
	address:'Newton #273, col. Granada, Miguel Hidalgo, México DF',
	telephone:'11234567',
	latitude:19.4368,
	longitude:-99.1847,
	image:'images/residencialpolanco.png',
	thumbnail:'images/residencialpolanco.png',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:400
	},{
		room:'double',
		price:500
	}]
}];

var searchByName = function(name){
	Titanium.API.log(name);
	li = [];
	for (var i=0; i < hotels.length; i++) {		
		if( hotels[i].name.indexOf(name) >= 0 ){
			li.push(hotels[i]);
		}
	}
	return li;
};


var searchNearBy = function(point,delta){
	li = [];
	for (var i=0; i < hotels.length; i++) {
		var d=(Math.sqrt(((point.latitude -hotels[i].latitude )^2 ) + ((point.longitude - hotels[i].longitude)^2 )  ) * FACTOR) ;		
		if(  d <= delta ){			
			li.push(hotels[i]);
		}
	}
	return li;
};