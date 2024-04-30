/*=========automatic check=========*/
//21 jun = 5:00-6:30



var h = document.querySelector('[data-purpose="curriculum-section-container"]'); 
//console.log(h);
var g=h.querySelectorAll('input[type="checkbox"]'); 
//console.log(g);
for(var i=0;i<g.length;i++){
g[i].disabled = false;
g[i].classList.remove("ud-sr-only");
if(g[i].checked!==true){
g[i].click();
}
//console.log(g[i]);
}








/*==========manual check===========*/

/*



var h = document.querySelector('[data-purpose="curriculum-section-container"]'); 
//console.log(h);
var g=h.querySelectorAll('input[type="checkbox"]'); 
//console.log(g);
for(var i=0;i<g.length;i++){
//g[i].checked=true;
g[i].disabled = false;
g[i].classList.remove("ud-sr-only");
//console.log(g[i]);
}


*/