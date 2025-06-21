// bot.js
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const dotenv = require('dotenv');


const { handleCommand } = require('./handlers/command.handler');
const { handleCallbackQuery } = require('./handlers/callback.handler');
const { detectedBad } = require('./utils/modifyText/detectBad');

dotenv.config();

const token = process.env.TELEGRAM_KEY;
const bot = new TelegramBot(token, { polling: true });

global.userState = {}; // تخزين حالة كل مستخدم حسب chatId

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  try {
    if (messageText.startsWith('/')) {
      await handleCommand(bot, msg);
    } else {
      const badWord = detectedBad(messageText);
      if (badWord === "error") throw new Error("الرجاء عدم إرسال رسائل نابية");
      const state = global.userState [chatId] || 'chat';
      if (state === 'search') { 
        await require('./handlers/search.handler').handleSearch(bot, msg, messageText);
      } else {
        await require('./services/nlp.service').respond(bot, msg, messageText);
      }
    }
  } catch (err) {
    bot.sendMessage(chatId, err.message || 'حدث خطأ ما');
  }
});

bot.on('callback_query', async (callbackQuery) => {
  await handleCallbackQuery(bot, callbackQuery);
});