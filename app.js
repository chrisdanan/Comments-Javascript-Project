var main = function()
{
	"use strict";

	//window.alert("hello Vane");

	//Create an event listener for the button, so that when the user clicks the button, the comment is
	//submitted.
	$(".comment-input button").on("click", function(event)
	{
		//console.log("hello Vane!");
		var $new_comment = $("<p>"),	//Create a new paragraph element.
			comment_text = $(".comment-input input").val(); //Stores the value of the input text box.

		$new_comment.hide();	//Hide the paragraph so that we can use the fade-in function.

		if(comment_text !== "")
		{
			$new_comment.text(comment_text);	//Set the text of the new paragraph to the value of the input box.
			$(".comments").append($new_comment);	//Put the new comment in the comments section.
			$new_comment.fadeIn();	//New comment will fade-in, making for a cool effect.
			$(".comment-input input").val("");
		}
	});

	//Create an event listener for input textbox that listens for the Enter key, so that input is entered
	//when the user presses Enter.
	$(".comment-input input").on("keypress", function(event)
	{
		//console.log("Key pressed: " + event.keyCode);
		if(event.keyCode == 13)
		{
			var $new_comment;
			
			//The following does the same thing as the click button event listener above - I just
			//shortened it by chaining the functions calls.
			if($(".comment-input input").val() !== "")
			{
				$new_comment = $("<p>").text($(".comment-input input").val());
				$new_comment.hide();
				$(".comments").append($new_comment);
				$new_comment.fadeIn();
				$(".comment-input input").val("");
			}
		}
	});
};

$(document).ready(main);