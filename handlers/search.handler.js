// handlers/search.handler.js
const { getAyaFromWord } = require('../services/quran.service');
const { removeDiacritics } = require('../utils/modifyText/removeDiacritics');

exports.handleSearch = async (bot, msg, word, page = 1) => {
  const chatId = msg.chat.id;
  const limit = 3;
  const offset = (page - 1) * limit;

  try {
    const cleanWord = removeDiacritics(word);
    const { results, pagination } = await getAyaFromWord(cleanWord, limit, offset);

    if (!results || results.length === 0) {
      bot.sendMessage(chatId, "لم يتم العثور على نتائج");
      return;
    }

    // إرسال النتائج الحالية
    for (const item of results) {
      await bot.sendMessage(chatId, `${item.ayah}`, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'ترجمة الأية', callback_data: JSON.stringify({ text: "translation", ayah_id: item.id }) }],
            [{ text: "مكان نزولها", callback_data: JSON.stringify({ text: "palceOfIt", ayah_id: item.id }) }],
            [{ text: "العودة إلى الدردشة", callback_data: JSON.stringify({ text: "Chat" }) }]
          ]
        }
      });
    }

    // إذا كان هناك صفحة تالية، نرسل زر "عرض المزيد"
    if (pagination.hasNextPage) {
      await bot.sendMessage(chatId, "هل تريد عرض المزيد من النتائج؟", {
        reply_markup: {
          inline_keyboard: [
            [{
              text: 'عرض المزيد',
              callback_data: JSON.stringify({ text: "moreResults", word, page: pagination.nextPage })
            }]
          ]
        }
      });
    }

  } catch (err) {
    console.error(`Error in search handler for chatId ${chatId}:`, err.message);
    bot.sendMessage(chatId, "حدث خطأ أثناء معالجة طلبك.");
  }
};