//global variables that will store the toolboxm colour palette
//and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var backgroundcolour = null;


function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");
	
    
   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new colorPicker();
	

    //backgroundcolour tool
    
    backgroundcolour = new backgroundColourTool();
	
	// thickness tool
	
	thickness = new thicknessTool();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new freehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new sprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new StampTool());
    toolbox.addTool(new StampTool2());
	toolbox.addTool(new Eraser());

	
  

}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
	
	
	}



