// This is one of two stamp tools that paints a circle onto the canvas.
//A function created to make a circle stamp on the canvas.

function StampTool() {
	
    this.name= "StampTool",
    this.icon="assets/circle.png",
    this.points= 13,
    this.draw= function(){
        //when a certain button is pressed and the mouse is pressed, a circle is then created where the mouse is.
        if(mouseIsPressed){
			stroke(c);
			fill(c);
            ellipse(mouseX, mouseY, 80, 80);
            
            
            }
        }
    }

