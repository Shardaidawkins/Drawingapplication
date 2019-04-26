//This is the eraser tool

function Eraser(){
	
	this.name = "EraserTool";
    this.icon = "assets/eraser.png"; 
	this.strokeColor = "white";
	
// This is the draw function of the erase tool which works by drawing a white path when the mouse is pressed 
	
this.draw = function() {
	strokeWeight(6);
        stroke(this.strokeColor);
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
}
	
	
};

