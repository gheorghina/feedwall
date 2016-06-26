(function () {
    var box = PUBNUB.$('box');
    var questionsBox = PUBNUB.$('questionsBox');
    var inputChat = PUBNUB.$('input-chat');
    var chatchannel = 'FeedWallChat';
    var questionschannel = 'FeedWallQuestions';

    PUBNUB.subscribe({
        channel: chatchannel,
        callback: function (text) { box.innerHTML = ('' + text).replace(/[<>]/g, '') + '<br>' + box.innerHTML }
    });

    PUBNUB.subscribe({
        channel: questionschannel,
        callback: function (text) { questionsBox.innerHTML = ('' + text).replace(/[<>]/g, '') + '<br>' + questionsBox.innerHTML }
    });

    PUBNUB.bind('keyup', inputChat, function (e) {
        (e.keyCode || e.charCode) === 13 && PUBNUB.publish({
            channel: chatchannel, message: $('#username').val() + ' : ' + inputChat.value, x: (inputChat.value = '')
        })
    })
})();