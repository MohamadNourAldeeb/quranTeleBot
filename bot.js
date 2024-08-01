const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');


const { getAyahTranslation ,getAyaFromWord, getAyahPlace } = require('./utils/search_in_quran');
const { manger } = require('./ar_nlp');
const dotenv = require("dotenv");
const { removeDiacritics } = require('./utils/modifyText/removeDiacritics');
const { checkBadEveryWord } = require('./utils/modifyText/detectBad');
dotenv.config({ path: `.env` });

const token =process.env.TELEGRAM_KEY; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });
let search_word=""
let currentState = 'chat';
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const user_first_name = msg.chat.first_name
  const user_last_name = msg.chat.last_name
  try {
    if (messageText.startsWith('/')) {
      const command = messageText.split(' ')[0]; // Extract the command part
      switch (command) {
        case '/ترحيب':
          bot.sendMessage(chatId, ` ${user_first_name}  ${user_last_name} أهلا وسهلا بك اخي`);
          // bot.sendPhoto(chatId, image);
          break;
        case '/الوداع':
          bot.sendMessage(chatId, `  ${user_first_name}  ${user_last_name} في أمان الله`);
          break;
        case '/من نحن':
          bot.sendMessage(chatId, "انا بوت مبرمج من قبل المهندس محمد نور الديب اهدف لتقديم خدمات بحث قرأنية وخدمات بحث في تفاسير وترجكات والاحاديث الشريفة");
          break;
        case '/searchinquran':
          currentState = "search"
          bot.sendMessage(chatId, "ارسل الكلمة للبحث عنها");
          break;
      }
    }
    else {
      let detectedBad = checkBadEveryWord(messageText)
      if (detectedBad == "error") {
        throw new Error("الرجاء عدم ارسال رسائل  نابية")
      }
      if (currentState == "chat") {
        
        await manger.load("./model.nlp");
        let response = await manger.process("ar", messageText);
        if (response.answer)
          bot.sendMessage(chatId, response.answer);
        else {
          bot.sendMessage(chatId, 'أعتذر لم افهم قصدك ؟');
        }
      }
      else if (currentState == "search") {
        search_word=messageText.trim()
        bot.sendMessage(chatId, "    تريد البحث في    :   ", {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: '   البحث في القرأن الكريم  ', callback_data:JSON.stringify({text:"Quran"}) }],
              [{ text: 'البحث في السنة الشريفة', callback_data: JSON.stringify({text:"Sunah"}) }],
              [{ text: "العودة الى الدردشة", callback_data:JSON.stringify({text:'Chat'})}]
            ]
          })
        });
      }
    }
  } catch (error) {
    if (error.message == "الرجاء عدم ارسال رسائل  نابية")
      bot.sendMessage(chatId, error.message);
  }

});
bot.on('callback_query', async (callbackQuery) => {
  const action = JSON.parse(callbackQuery.data).text; // This is the callback_data you set in the inline keyboard
  const chatId = callbackQuery.message.chat.id;
  switch (action) {
    case 'Quran':
      let cleanText = removeDiacritics(search_word)
      let ayat = await getAyaFromWord(cleanText)
      search_word=""
      if (ayat)
        ayat.map(item => {
          setTimeout(() => {
            bot.sendMessage(chatId, `${item.ayah}`, {
              reply_markup: JSON.stringify({
                inline_keyboard: [
                  [{ text: 'ترجمة الأية الى الاتجليزية', callback_data: JSON.stringify({text:"translation" ,ayah_id:item.id}) }],
                  [{ text: "مكان نزولها", callback_data:JSON.stringify({text:"palceOfIt" ,ayah_id:item.id}) }],
                  [{ text: "العودة الى الدردشة", callback_data: JSON.stringify({text:'Chat'}) }]
                ]
              })
            })
          }
            , 200
          )

        })
      else {
        bot.sendMessage(chatId, `لا يوجد نتائج مطابقة`);
      }

      break;
    case 'Sunah':
      console.log('User clicked Sunah');
      break;
    case 'translation':
      const ayah_data=JSON.parse(callbackQuery.data)
      let ayah_translation = await getAyahTranslation(ayah_data.ayah_id)
      if (ayah_translation)
            bot.sendMessage(chatId, `${JSON.stringify(ayah_translation.ayah_en)}`, {
              reply_markup: JSON.stringify({
                inline_keyboard: [
                  [{ text: "العودة الى الدردشة", callback_data:  JSON.stringify({text:'Chat'})  }]
                ]
              })
            })
      else {
        bot.sendMessage(chatId, `لا يوجد نتائج مطابقة`);
      }
      break;
    case 'palceOfIt':
      const ayah_placdata=JSON.parse(callbackQuery.data)
 
      let place_of_ayah = await getAyahPlace(ayah_placdata.ayah_id)
      

      if (place_of_ayah){
        if(place_of_ayah.place_of_revelation =='Meccan')
        bot.sendMessage(chatId, ` وهذه السورة مكيَة ${place_of_ayah.surah_name}هذه الأية من سورة ال `, {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: "العودة الى الدردشة", callback_data:  JSON.stringify({text:'Chat'})  }]
            ]
          })
        })
        else {
          bot.sendMessage(chatId, ` 
          هذه الأية من سورة : ${place_of_ayah.surah_name}\n
            وهذه السورة مدنيَة `, 
            
            {
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [{ text: "العودة الى الدردشة", callback_data:  JSON.stringify({text:'Chat'})  }]
              ]
            })
          })
        }

      }
          
      else {
        bot.sendMessage(chatId, `لا يوجد نتائج مطابقة`);
      }
      
      break;
    case 'Chat':
      currentState == "chat"
      console.log('User clicked Chat');

      break;
    default:
      console.log(`Unknown action: ${action}`);
  }

  // Optionally, send a response to the user

});


