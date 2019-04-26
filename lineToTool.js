
function LineToTool(){
	this.icon = "assets/lineTo.png";
	this.name = "LineTo";
	
/* Variable called startMouseX that is set to -1 */
	var startMouseX = -1;
/* Variable called startMouseY that is set to -1 */
	var startMouseY = -1;
/* Boolean variable called drawing that is set to false */
	var drawing = false;
	
/* function to draw */
	
	this.draw = function(){
/*If the mouse is being pressed and the variable startMouseX equals -1, then startMouseX becomes  mouseX(the x posisiton of the mouse) and startMouseY becomes mouseY(the y position of the mouse). Drawing becomes equal to true. loadPixels loads the pixel data (what has been drawn) into display */
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
/* If the mouse is not being pressed update the position of the mouse for when the mouse will next be pressed */
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
/* If drawing is equal to true then start drawing with the startMouseX and startMouseY values and the mouseX and mouseY (which are equivalent from the previous function -startMouseX=mouseX and startMouseY=mouseY), then reset the values of startMouseX and startMouseY to -1 once the mouse is no longer being pressed */
		else if(drawing){
			line(startMouseX, startMouseY, mouseX, mouseY);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}