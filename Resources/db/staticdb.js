var FACTOR = 0.0093;
hotels=[{
	id: 1,
	name:'Fiesta Inn Viaducto',
	header: 'F',
	stars:3,
	pool:false,
	parking:true,
	address:'Av. Insurgentes Sur 553, Col. Escandon, Benito Juarez, México DF',
	telephone:'52767400',
	latitude:19.40019,
	longitude:-99.170778,
	image:'/images/INS_fiestainn_ciudadmexico_hotel.jpg',
	thumbnail:'../images/INS_fiestainn_ciudadmexico_hotel.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1400
	},{
		room:'double',
		price:1500
	}]
},{
	id: 2,
	name:'Residencia Polanco',
	header: 'R',
	stars:3,
	pool:false,
	parking:true,
	address:'Newton #273, col. Granada, Miguel Hidalgo, México DF',
	telephone:'11234567',
	latitude:19.4368,
	longitude:-99.1847,
	image:'/images/residencialpolanco.png',
	thumbnail:'../images/residencialpolanco.png',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:400
	},{
		room:'double',
		price:500
	}]
}];

var searchById = function(id){
	for(var i=0; i < hotels.length; i++){
		if(hotels[i].id === id){
			return hotels[i];
		}
	}
	return null;
}

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
	liNear = [];
	var pushing = "";
	var R = 6371; // km
	for (var i=0; i < hotels.length; i++) {
		
	var lat2 = hotels[i].latitude;
	var lat1 =  point.latitude;
	var lon1 = point.longitude;
	var lon2 = hotels[i].longitude;
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
		
		
		
			
		Ti.API.info("\n\n ********************currLatitude = " + point.latitude +", currLong = " + point.longitude  + " , d = " + d);
		Ti.API.info("\n\n ********************pointLatitude = " +hotels[i].latitude +", currLong = " + hotels[i].longitude + " , d = " + d);	
		if(  d <= delta ){
			pushing = pushing +" puching widh d = " + d;			
			liNear.push({hotel:hotels[i],distance:d.toFixed(2)});
		}
	}
	Ti.API.info("pushing = " + pushing);
	return liNear;
};
