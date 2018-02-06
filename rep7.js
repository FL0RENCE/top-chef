const http = require('http')
const bl = require('bl')
var data= new Array(35)
const lien="https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/"
let lienentier="";

for (var i=0; i<35; i++){
	if (i==0){
		lienentier=lien;
	}
	else{
		lienentier=lien+"page-"+String.fromCharCode(97 + i);
	}
	http.get(lienentier, (response) => {
		let data = '';
		response.on('data', (chunk) => {
		  data[i-1]= chunk;
		});
	})
}