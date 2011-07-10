hotels=[{	name:'Residencia Polanco',
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
			prices:[{room:'single',price:400},{room:'double',price:500}]
			}
		];

var searchByName = function(name){
	li = [];
	for (var i=0; i < hotels.length; i++) {		
		if( hotels[i].name.indexOf(name) >= 0 ){
			li.push(hotels[i]);
		}
	}
	return li;
};

