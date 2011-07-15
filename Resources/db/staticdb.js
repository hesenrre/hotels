var FACTOR = 0.0093;
hotels=[
{
	id: 6,
	name:'Camino Real - Mexico City',
	header: 'C',
	stars:4,
	pool:false,
	parking:true,
	address:'Mariano Escobedo 700, Col Anzures Mexico City, DF 11590 México',
	telephone:'533776655',
	latitude:19.427663,
	longitude:-99.17941,
	image:'/images/Camino_real.jpg',
	thumbnail:'../images/Camino_real.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:2157
	},{
		room:'double',
		price:2500
	}]
},
{
	id: 10,
	name:'Casa Castelar',
	stars:3,
	pool:false,
	parking:true,
	address:'Emilio Castelar # 34 (esquina Galileo) Colonia Polanco Mexico City, DF 11560 México',
	telephone:'12376655',
	latitude:19.429747,
	longitude:-99.196694,
	image:'/images/Casa_castelar.jpg',
	thumbnail:'../images/Casa_castelar.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1307
	},{
		room:'double',
		price:1500
	}]
},

{
	id: 13,
	name:'Cityexpress Ciudad de Mexico Insurgentes Sur',
	stars:2,
	pool:false,
	parking:true,
	address:'Insurgentes Sur 1581 Mexico City, DF México',
	telephone:'12376655',
	latitude:19.364403,
	longitude:-99.181985,
	image:'/images/Cityexpress_insurgentes_sur.jpg',
	thumbnail:'../images/Cityexpress_insurgentes_sur.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:906
	},{
		room:'double',
		price:1100
	}]
},

{
	id: 11,
	name:'Citysuites Ciudad de Mexico Anzures',
	stars:3,
	pool:false,
	parking:true,
	address:'Leibniz 120 Col Anzures Mexico City, DF 11590 México',
	telephone:'12376655',
	latitude:19.42913,
	longitude:-99.178251,
	image:'/images/Citisuites.jpg',
	thumbnail:'../images/Citisuites.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1547
	},{
		room:'double',
		price:1800
	}]
},{
	id: 3,
	name:'Crowne Plaza Hotel',
	stars:3,
	pool:false,
	parking:true,
	address:'Dakota #95 Esq. Altadena, Colonia Napoles',
	telephone:'52767400',
	latitude:19.396112,
	longitude:-99.174442,
	image:'/images/cp_wtc.jpg',
	thumbnail:'../images/cp_wtc.jpg',
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
	name:'Fiesta Inn Centro Historico',
	header: 'F',
	stars:3,
	pool:false,
	parking:true,
	address:'Av. Juárez 76 / José Azueta 27 C Col. Centro',
	telephone:'52767400',
	latitude:19.435003,
	longitude:-99.146832,
	image:'/images/ALA_fiestainn_ciudadmexico_hotel.jpg',
	thumbnail:'../images/ALA_fiestainn_ciudadmexico_hotel.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1400
	},{
		room:'double',
		price:1500
	}]
},{
	id: 12,
	name:'Fiesta Inn Insurgentes Sur',
	stars:4,
	pool:false,
	parking:true,
	address:'Mercaderes #20 Col San Jose Insurgentes Mexico City, DF 03900 México',
	telephone:'12376655',
	latitude:19.363988,
	longitude:-99.18339,
	image:'/images/Fiesta_inn_insurgentes_sur.jpg',
	thumbnail:'../images/Fiesta_inn_insurgentes_sur.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1049
	},{
		room:'double',
		price:1300
	}]
},

{
	id: 1,
	name:'Fiesta Inn Viaducto',
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
id: 4,
	name:'Holiday Inn Express WTC',
	header: 'H',
	stars:3,
	pool:false,
	parking:true,
	address:'Dakota #95 Col. Napoles',
	telephone:'52767400',
	latitude:19.395566,
	longitude:-99.174775,
	image:'/images/hie_wtc.jpg',
	thumbnail:'../images/hie_wtc.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1400
	 },{
		 room:'double',
		 price:1500
	 }]
},{
	id: 8,
	name:'JW Marriott Hotel Mexico City',
	header: 'J',
	stars:5,
	pool:false,
	parking:true,
	address:'Andres Bello No 29 Mexico City, DF 11560 México',
	telephone:'12376655',
	latitude:19.426702,
	longitude:-99.194977,
	image:'/images/JW_marriot_mexico.jpg',
	thumbnail:'../images/JW_marriot_mexico.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1641
	},{
		room:'double',
		price:2000
	}]
},

{
	id: 3,
	name:'Las Suites',
	header: 'L',
	stars:3,
	pool:false,
	parking:true,
	address:'Campos Eliseos 470 Mexico City, DF 11560 México',
	telephone:'52776655',
	latitude:19.430577,
	longitude:-99.205395,
	image:'/images/Las_Suites.jpg',
	thumbnail:'../images/Las_Suites.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1383
	},{
		room:'double',
		price:1500
	}]
},
{
	id: 5,
	name:'Nikko Mexico',
	header: 'N',
	stars:4,
	pool:false,
	parking:true,
	address:'Campos Eliseos 204 Colonia Polanco Mexico City, DF 11560 México',
	telephone:'533776655',
	latitude:19.427744,
	longitude:-99.192617,
	image:'/images/Nikko_mexico.jpg',
	thumbnail:'../images/Nikko_mexico.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:2157
	},{
		room:'double',
		price:2500
	}]
},
{
	id: 9,
	name:'Presidente InterContinental Mexico City',
	header: 'P',
	stars:5,
	pool:false,
	parking:true,
	address:'Campos Eliseos 218 Mexico City, DF 11560 México',
	telephone:'12376655',
	latitude:19.427238,
	longitude:-99.193947,
	image:'/images/Presidente_intercontinental.jpg',
	thumbnail:'../images/Presidente_intercontinental.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1395
	},{
		room:'double',
		price:1500
	}]
},{
	id: 7,
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
},
{
	id: 7,
	name:'W Mexico City',
	header: 'W',
	stars:5,
	pool:false,
	parking:true,
	address:'Campos Eliseos 252 Chapultepec Mexico City, DF 11560 México',
	telephone:'533776655',
	latitude:19.427633,
	longitude:-99.194875,
	image:'/images/W_mexico_city.jpg',
	thumbnail:'../images/W_mexico_city.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1641
	},{
		room:'double',
		price:2000
	}]
}
,     
{
	id: 4,
	name:'Wyndham Garden Mexico City Polanco',
	stars:3,
	pool:false,
	parking:true,
	address:'Leon Tolstoi 22 Mexico City, DF 11590 México',
	telephone:'52776655',
	latitude:19.425235,
	longitude:-99.176695,
	image:'/images/Wyndham_garden.jpg',
	thumbnail:'../images/Wyndham_garden.jpg',
	paymethods:['VISA','MASTERCARD'],
	prices:[{
		room:'single',
		price:1063
	},{
		room:'double',
		price:1300
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
