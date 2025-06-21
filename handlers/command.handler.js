// handlers/command.handler.js
exports.handleCommand = async (bot, msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

   if (messageText.startsWith('/')) {
  const [command] = messageText.split(' ');

  switch (command) {
    case '/ترحيب':
      bot.sendMessage(chatId, `أهلاً وسهلاً بك ${msg.chat.first_name} ${msg.chat.last_name}`);
      break;
    case '/الوداع':
      bot.sendMessage(chatId, `في أمان الله ${msg.chat.first_name}`);
      break;
    case '/من نحن':
      bot.sendMessage(chatId, "أنا بوت قرآني مبرمج من قبل محمد نور الديب، لأقدم خدمات بحث في القرآن والسنة.");
      break;
    case '/searchinquran':
      global.userState[chatId]="search"
      bot.sendMessage(chatId, "ارسل الكلمة للبحث عنها");
      break;
      case '/الرجوع':
      global.userState[chatId]="chat"
      bot.sendMessage(chatId, "تفضل اسألني حتى أجيبك");
      break;
    default:
      bot.sendMessage(chatId, "لم أفهم الأمر");
  }}


};