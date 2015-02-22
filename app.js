var main = function()
{
	"use strict";

	//window.alert("hello Vane");

	//Function adds a new comment to the comments section.
	var addCommentFromInputBox = function()
	{
		var $newComment = $("<p>"),	//Create a new paragraph element.
			commentText = $(".comment-input input").val();	//Store the value of user's comment in new paragraph element.

		$newComment.hide();	//Hide the new paragraph so we can use the fade-in later.

		//Make sure user did not enter an empty comment.
		if(commentText !== "")
		{
			$newComment.text(commentText);	//Put user comment into new paragraph.
			$(".comments").append($newComment);	//Add new comment to the comments section.
			$newComment.fadeIn();	//Add cool fade-in effect to make things look purdy.
			$(".comment-input input").val("");	//Delete input text box contents for better user experience.
		}
	};

	//Event listener allows user to enter comment via pressing the submit button.
	$(".comment-input button").on("click", function(event)
	{
		//console.log("hello Vane!");

		addCommentFromInputBox();
	});

	//Event listener allows user to enter comment via pressing the Enter Key on the keyboard.
	$(".comment-input input").on("keypress", function(event)
	{
		//console.log("Key pressed: " + event.keyCode);

		//Enter Key keycode = 13.
		if(event.keyCode == 13)
		{
			addCommentFromInputBox();
		}
	});
};

$(document).ready(main);