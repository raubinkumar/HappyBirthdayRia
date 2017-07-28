/*eslint-env jquery */
/*eslint-disable no-unused-vars */
$(document).ready(function(){
	// Varibales
    var messageText = [];
	messageText[0] ="There is a reason why I call you beauty overdosed. Though I am not going to share this here, but those who are seeing this picture must be agreeing with me.";
	messageText[1] = "You are special and you were (are) cute. With this, I remember your words <bf> Girls are made to be loved </bf>. Though it came up after a silly fight, but I agree with you and I'll say, I Love you so much.";
	messageText[2] = "It's your birthday. Now you have more grown up, every year you are becoming better, but you were and are always perfect to me.";
	messageText[3] = "This is the 5th year we are sharing and growing together, this is like a treasure to me. I can remember our every moment of laughter, love, care and last but not the least The Great Debates, which I never won.";
	messageText[4] = "This is the picture which I like the most and it is close to my heart. You were sick, but still you were so beautiful.";
	messageText[5] = "<bf>Happy Birthday Cintaku, Sayangku, Kasihku.</bf>";
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var timerTime = 20;
	var imageName = "Ria";
	var imageCounter = 1;
	var container = $("#containerDiv");
	
	// Check if broweser window width is smaller than height (Phone) then adjust the contents to fit in UI. 
    if(windowHeight > windowWidth){
		$("#HeartDiv").removeClass("heart");
		$("#HeartDiv").addClass("heartCenter");
		$("#rightPlaceHolder").removeClass("rightTextHolder");
		$("#rightPlaceHolder").addClass("downTextHolder");
    }
	
	// Render first message.
	$("#messageTextPlaceholder").html(messageText[imageCounter-1]);
	
	// set the timer and change the contents after 20 sec.
    var myVar = setInterval(function(){
    timerTime--;
	if(timerTime ===0){
	    imageCounter++;
	    var fileName = "Url(Display/" + imageName + imageCounter + ".jpg)";
	    $( ".image" ).css( "background", fileName);
	    $( ".image" ).css( "background-position", "50%");
	    $( ".image" ).css( "background-size", "cover");
	    $("#containerDiv").remove();
	    $("#rightPlaceHolder").append(container);  
	    $("#messageTextPlaceholder").html(messageText[imageCounter-1]);
            timerTime = 20;
	    if(imageCounter > 5)
	    {
		// Make the picture display faster
		timerTime = 5;

		if(imageCounter === 10)
		{
		    // reset the counter-increment
		    imageCounter = 0;

		    // Make the picture display faster
		    timerTime = 20;
		}
		
	    }
	}
} ,1000);
});