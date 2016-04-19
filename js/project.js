var tLink = require('telegram.link')();

function OnChatSelected(chatId) {
    var id = "#chatDiv" + chatId;
    $(id).toggleClass("selected");
    id = "#chatNameDiv" + chatId;
    $(id).toggleClass("selected");
//    setTimeout(function(){
//        DeselectChat(chatId);}
//               ,50);
    document.location("chat.html");
}

function DeselectChat(chatId) {
   var id = "#chatDiv" + chatId;
    $(id).toggleClass("selected");
    id = "#chatNameDiv" + chatId;
    $(id).toggleClass("selected");

}