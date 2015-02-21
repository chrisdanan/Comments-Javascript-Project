var main = function()
{
	"use strict";

	//window.alert("hello Vane");

	//Create an event listener for the button.
	$(".comment-input button").on("click", function(event)
	{
		//console.log("hello Vane!");
		var $new_comment = $("<p>"),	//Create a new paragraph element.
			comment_text = $(".comment-input input").val(); //Stores the value of the input text box.

		if($(".comment-input input").val() !== "")
		{
			$new_comment.text(comment_text);	//Set the text of the new paragraph to the value of the input box.
			$(".comments").append($new_comment);	//Put the new comment in the comments section.
		}
	});
};

$(document).ready(main);