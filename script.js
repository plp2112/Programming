/**
 * @author
 */

//function for webpage to execute once it has json file in hand
function addJSONToPage(jsonData){
	//Console log my data
	console.log(jsonData);
	//Create a div with jquery
	var myDataDiv = $("<div>");
	//Add data to div
	myDataDiv.html(jsonData);
	//Put myDataDiv div inside DivID
	$("#DivID").append(myDataDiv);
}

//this is my custom data loaded function. Create recipe for activities
//call it pageLoaded. 
function pageLoaded(){

//Use jQuery to create new div element
var myjQDiv = $("<div>");
//Use jQuery to add text to it
$(myjQDiv).html("This is my jQuery div.");
//Take new div "myjQDiv", and add some html

//Grab div with id DivID
//Put new div inside it
$("#DivID").append(myjQDiv);

//I expect to see this console log after
//"javascript file loaded"	
console.log("my document is loaded");	

//Use the jQuery get function to load my JSONfile, takes 3 parameters
//first parameter/argument is the file I want
//Second is the function to pass that data to
//Third is data format	
$.get("MovieList.json", addJSONToPage, "json");	
	
	
}
///When the entire webpage has loaded, initiate the "pageLoaded" function
//that I defined above
$( document ).ready(pageLoaded);

//I expect to see this console log before 
//"my document is loaded"
console.log("javascript file loaded");

