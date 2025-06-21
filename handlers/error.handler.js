// utils/errorHandler.js
exports.handleError = async (bot, chatId, err, customMessage = null) => {
  console.error(`Error in chatId ${chatId}:`, err.message);
  console.error('Stack:', err.stack);

  const message = customMessage || 'حدث خطأ ما، الرجاء المحاولة مجدداً.';
  try {
    await bot.sendMessage(chatId, message);
  } catch (sendErr) {
    console.error('Failed to send error message:', sendErr.message);
  }
};