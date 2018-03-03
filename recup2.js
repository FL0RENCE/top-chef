let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');
const lien="https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/"
let lienentier="";

for (var i=0; i<35; i++){
	if (i==0){
		lienentier=lien;
	}
	else{
		lienentier=lien+"page-"+String.fromCharCode(97 + i);
	}
	let $ = cheerio.load(lienentier);
	jsonframe($); // initializes the plugin

	var frame = {
		"restaurants": {           // setting the parent item as "companies"
			"selector": ".poi-search-result", 
			"data": [{              // "data": [{}] defines a list of items
				"name": ".ds-1col node node--poi view-mode-poi_card node--poi-card node--poi--poi-card clearfix gtm-jsevent-processed [attr-gtm-title=name]",
				"ref": {
					"selector": ".poi-card-link",
					"data": {
						"ref":"href"
					}
				}
				//enregistrement du nom et de la description (qui inclut l'adresse)
			}]
		}
	}	
}

const lienfourchette='https://www.lafourchette.com/search-refine/';

//fonction qui retourne le nombre d'éléments communs à  2 listes
var nbcommun = function(tab1,tab2){
 
    var n=0;                                
    var n1=tab1.length;					    
    var n2=tab2.length;					    
    for(var i=0;i<n1;i++){
        for(var j=0;j<n2;j++){
            if(tab1[i]==tab2[j]){
                n++;
                break;
            }
        }
    }
    return n;
};

for (var j=0; j<restaurants.length; j++){
	let nom=restaurants[i].name;
	let mots=nom.split(" ");
	let querry="";
	for (var k=0; k<mots.length-1; k++){
		querry=querry+mots[i]+"%20";
	querry=querry+mots[mots.length-1];
	
	var promo=[{"title":"",
	"promo":}]
	
	var promotions=JSON.stringify(promo);
	
	var fs = require('fs');
	fs.writeFile("rpomotions.json", promotion);
	
	fetch(lienfourchette+querry);
	//resultats de la recerche asociée à chaque resto
	.then(res=>res.json())
	.then(res=>{
		let nb = res.result=="1"?res.data.restaurants.length:0;
		for (var l=0; l<nb; l++){
			let adresse =res.data.restaurants[l].address;
			if (nbcommun(adresse.split(" "), restaurants[i].ref.split("-"))>0){
				//on a le bon resto: l'adresse est pareille que celle de la description sur michemin
				fetch("https://www.lafourchette.com"+res.data.name.href);
				.then(page=>page.json())
				.then(res=>{
					//regarder si promo
					try{
						promotion[l].title=restaurants[i].ref.name;
						promotion[l].promo=promores.container.restaurantCard-container.restaurantCard-left.restaurant-card.restaurantContent."tab-pane active".RestaurantTabContent-section."saleTypes restaurantTabContent-section"."saleType saleType--speciaOffer"."saleType-title;
					}
				}
			}	
		}
	})
}
