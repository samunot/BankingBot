var capital = require("./capital.js");
var slackToken = "xoxb-267111720244-OeZQJCyUtrEDsmIX117xt9ss";
var slack = require("./slack.js");
var Botkit = require('botkit');
var controller = Botkit.slackbot({
    debug: false
        //include "log: false" to disable logging
        //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});
controller.spawn({
    // token: process.env.SLACKTOKEN
    token: slackToken
}).startRTM()

var started = false;
var username = null;

controller.hears('hi', 'direct_mention,direct_message', function(bot, message) {
    started = true;
    userName = message.user;
    // slackUser.getName(message.user, function(name) {
    //     if (name) {
    //         userName = name;

    //     }
    // });
    bot.startConversation(message, function(err, convo) {
        bot.reply(message, 'Hi' + '<@' + message.user + '>..Let\'s get started \n Type exit at any moment to quit the chat.');
        convo.addQuestion("Test-1", function(answer, convo) {
            bot.reply(message, "Thanks for your reply" + answer.text);
            convo.next();
        })
        convo.on('end', function(convo) {
            if (convo.status == "completed") {
                bot.reply(message, "End of test");
                convo.stop();
            }
        })
    });
});