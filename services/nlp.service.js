// services/nlp.service.js
const { manger } = require('../ar_nlp');

exports.respond = async (bot, msg, text) => {

      manger.load("./model.nlp");
    let response = await manger.process("ar", text);
      if (response.answer)
          bot.sendMessage(msg.chat.id, response.answer);
        else {
           bot.sendMessage(msg.chat.id, "أعتذر لم أفهم قصدك؟");
        }
  
};