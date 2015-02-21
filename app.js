var main = function()
{
	"use strict";

	//window.alert("hello Vane");
	$(".comment-input button").on("click", function(event){
		//console.log("hello Vane!");
		$(".comments").append("<p>This is a new comment!</p>");
	});
};

$(document).ready(main);