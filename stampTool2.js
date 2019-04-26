// This is second stamp tool that paints a square onto the canvas.
//A function created to make a square stamp on the canvas.

function StampTool2() {
	
    this.name= "StampTool2",
    this.icon="assets/square.png",
    this.points= 13,
    this.draw= function(){
        //when a certain button is pressed and the mouse is pressed, a square is then created where the mouse is.
        if(mouseIsPressed){
			stroke(c);
			fill(c);
            rect(mouseX, mouseY, 80, 80);
            
            
            }
        }
    }
