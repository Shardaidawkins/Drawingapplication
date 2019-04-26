//This is the thickness tool. When the buttons are pressed the strokeweight of the tool changes respectively

function thicknessTool () {
		
//when the button Weightthin is clicked the strokeWeight changes to 1.     	         
$( "#weightThin" ).on( "click", function() {          
       strokeWeight(1)
        
        });    
	
//when the button Weightnormal is clicked the strokeWeight changes to 3.
$( "#weightNormal" ).on( "click", function() {          
       strokeWeight(3)
        
        });  

//when the button Weightmedium is clicked the strokeWeight changes to 6.
$( "#weightMedium" ).on( "click", function() {          
       strokeWeight(6)
        
        });             
		
//when the button Weightthick is clicked the strokeWeight changes to 10.		
$( "#weightThick" ).on( "click", function() {          
       strokeWeight(10)
        
        });  	         
	

	
}
