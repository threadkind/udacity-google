// Select color input
var colorInput = $('input[type="color"]');
var color;

// Select size input
var heightInput = $('#input_height');
var widthInput = $('#input_width');

// Select submit input
var submit = $('input[type="submit"]');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	// remove any previous grid or paragraph that may be there
	$("#pixel_canvas").children().remove();
	$("#instructions").remove();

	// create an if stmt to make sure numbers entered are positive
	if(heightInput.val() <= 0 || widthInput.val() <= 0){
		$("#pixel_canvas").after('<p id="instructions">Please enter positive numbers for the height and/or width</p>');
	}else{
		// Create variable for height and width of grid
		height = heightInput.val();
		width = widthInput.val();

		// Create variable for rows
		var rows = "";

		// Create string containing html for number of cells wide the grid should be
		for(var i = 0; i < width; i++){
			rows += "<td></td>";
		}

		// Create variables for a single column and also an empty sting to store html for the number of columns there should be
		var singleColumn = "<tr>" + rows + "</tr>";
		var columns = "";

		// Run a loop to get a string of html to create the grid
		for(var j = 0; j < height; j++){
			columns += singleColumn;
		}
		$("#pixel_canvas").append(columns);}};


// Event listeners
// Event to listen for color change and store value in color variable
$(colorInput).change(function(){
	color = colorInput.val();
	console.log(color);
});
// Event to listen for click on submit button to run makeGrid function
$(submit).click(function(e){
	e.preventDefault();
	console.log(heightInput.val(), widthInput.val());
	makeGrid();
});
// Event delegation to listen for the click on each pixel
$("#pixel_canvas").on("click", "td", function(e){
	e.preventDefault();

	//get current value of color selctor
	color = colorInput.val();

	// change color of pixel to selected color	
	$(this).css("background-color", color);
})