// handlers/callback.handler.js
const { getAyahTranslation, getAyahPlace } = require('../services/quran.service');
const { handleSearch } = require('./search.handler');

exports.handleCallbackQuery = async (bot, callbackQuery) => {
  const action = JSON.parse(callbackQuery.data).text;
  const chatId = callbackQuery.message.chat.id;
 const data = JSON.parse(callbackQuery.data);
  switch (action) {
    case 'translation':
      const translationData = JSON.parse(callbackQuery.data);
      const translation = await getAyahTranslation(translationData.ayah_id);
      if (translation) {
        bot.sendMessage(chatId, translation.ayah_en);
      }
      break;

    case 'palceOfIt':
      const placeData = JSON.parse(callbackQuery.data);
      const place = await getAyahPlace(placeData.ayah_id);
      if (place) {
        const placeText = place.place_of_revelation === 'Meccan'
          ? `هذه السورة مكيَّة: ${place.surah_name}`
          : `هذه السورة مدنية: ${place.surah_name}`;
        bot.sendMessage(chatId, placeText);
      }
      break;

    case 'Chat':
      global.userState[chatId]="chat"
      bot.sendMessage(chatId, "تم العودة إلى وضع الدردشة");
      break;
    
      case 'moreResults':
      await handleSearch(bot, callbackQuery.message, data.word, data.page);
      break;
    default:
      bot.sendMessage(chatId, "لم أفهم الخيار");
  }
};