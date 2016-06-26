var QuestionsModule = QuestionsModule || {};
 
QuestionsModule = (function($) {
	function publishQuestion(){
       
       var questionschannel = 'FeedWallQuestions';
       var inputQuestion = PUBNUB.$('input-question');
       var username = $('#username').val();
       var eventcode = $('#eventcode').val();
       var messageValue = inputQuestion.value;

       PUBNUB.publish({
        channel : questionschannel, message : username + ' : ' + messageValue, x : (inputQuestion.value='')
        });

        $.post("/newquestion",{eventcode: eventcode, QuestionText: messageValue, username: username},function(data, statu){
            console.log("Data: " + data + "\nStatus: " + status);
        }); 
    }

	return{
       publishQuestion:publishQuestion 
    }

})(jQuery);