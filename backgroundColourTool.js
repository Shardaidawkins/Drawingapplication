//This tool changes the background colour of the canvas and covers the existing work done on the canvas once the corresponding button is pressed

function backgroundColourTool(){
            
//white background fill
	
$( "#bgcolourwhiteButton" ).on( "click", function() { 
fill(255); 
 
//paints a rectangle of the chosen colour into the size of the canvas
rect(0,0,canvasContainer.innerWidth(), canvasContainer.innerHeight()) }); 
	
//black background fill 
	
$( "#bgcolourblackButton" ).on( "click", function() { 
fill(0) ;

//paints a rectangle of the chosen colour into the size of the canvas
rect(0,0,canvasContainer.innerWidth(), canvasContainer.innerHeight()) });

$( "#bgcolourredButton" ).on( "click", function() { 
fill(255,0,0);
 
//paints a rectangle of the chosen colour into the size of the canvas
rect(0,0,canvasContainer.innerWidth(), canvasContainer.innerHeight()) }); 

$( "#bgcolourblueButton" ).on( "click", function() {
fill(0,0,255);

//paints a rectangle of the chosen colour into the size of the canvas
rect(0,0,canvasContainer.innerWidth(), canvasContainer.innerHeight()) }); 
	
$( "#bgcolourgreenButton" ).on( "click", function() { 
fill(0,255,0);

//paints a rectangle of the chosen colour into the size of the canvas
rect(0,0,canvasContainer.innerWidth(), canvasContainer.innerHeight()) });
	
$( "#bgcolourorangeButton" ).on( "click", function() {
fill(255,165,0);

//paints a rectangle of the chosen colour into the size of the canvas
rect(0,0,canvasContainer.innerWidth(), canvasContainer.innerHeight()) }); 

};