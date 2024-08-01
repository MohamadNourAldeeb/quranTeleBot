const { NlpManager } =require("node-nlp") ;

const manger = new NlpManager({ languages: ["ar"] });

// QUESATION welcome
// manger.addDocument("ar", "اريد البحث عن كلمة في القرأن", "welcome");
// manger.addDocument("ar", "كيفك", "welcome");



// QUESATION welcome
manger.addDocument("ar", "مرحبا", "welcome");
manger.addDocument("ar", "كيفك", "welcome");
manger.addDocument("ar", "شلونك حبيب", "welcome");
manger.addDocument("ar", "شلونك ", "welcome");
manger.addDocument("ar", "شو الأخبار", "welcome");
manger.addDocument("ar", " شو الحالة", "welcome");
manger.addDocument("ar", "شلونك غالي", "welcome");
manger.addDocument("ar", "شلونك اخي", "welcome");
manger.addDocument("ar", "هاي", "welcome");
manger.addDocument("ar", "سلامات", "welcome");
manger.addDocument("ar", "كيفكم", "welcome");
manger.addDocument("ar", "كيف الحال", "welcome");
manger.addDocument("ar", "ما الاخبار", "welcome");
manger.addDocument("ar", "هايات", "welcome");
manger.addDocument("ar", "هلو", "welcome");
manger.addDocument("ar", "الوو", "welcome");
manger.addDocument("ar", "مراحب", "welcome");
manger.addDocument("ar", "شالوم", "welcome");
manger.addDocument("ar", "حابب حكيك", "welcome");
manger.addDocument("ar", "السلام عليكم", "welcome");
manger.addDocument("ar", "كيف حالك", "welcome");
manger.addDocument("ar", "", "welcome");


// QUESATION  job
manger.addDocument("ar", " ماذا تقوم به ", "job");
manger.addDocument("ar", " ما عملك", "job");
manger.addDocument("ar", " ماذا تعمل" , "job");
manger.addDocument("ar", "شو بتشتغلو", "job");
manger.addDocument("ar", "شو بتعمل ", "job");
manger.addDocument("ar", "شو الهدف منك", "job");
manger.addDocument("ar", "ما المهمات التي تقدمها", "job");
manger.addDocument("ar", " ماذا تقدمون", "job");
manger.addDocument("ar", "شو بتقدموا", "job");
manger.addDocument("ar", "شو المهمات التي تقدمها", "job");
manger.addDocument("ar", " شو بتعملو", "job");
manger.addDocument("ar", " ما الخدمات المقدمة لديكم", "job");
manger.addDocument("ar", " شو الخدمات المتوفرة", "job");
manger.addDocument("ar", " ما الخدمات المتوفرة", "job");
manger.addDocument("ar", "ليش البوت موجودة", "job");
manger.addDocument("ar", " ما الهدف من البوت", "job");
// QUESATION  about_bot
manger.addDocument("ar", "خبرني عنك", "about_bot");
manger.addDocument("ar", "أخبرني عنك", "about_bot");
manger.addDocument("ar", "حدثني عنك", "about_bot");
manger.addDocument("ar", "اشرح لي عنك", "about_bot");
manger.addDocument("ar", "حكيلي عنك", "about_bot");
manger.addDocument("ar", "ليش البوت موجود", "about_bot");
manger.addDocument("ar", "لشو هالبوت", "about_bot");
manger.addDocument("ar", "ليش عاملين هالبوت ", "about_bot");
manger.addDocument("ar", "حكيلي عن البوت", "about_bot");
manger.addDocument("ar", "لي عاملين البوت", "about_bot");
manger.addDocument("ar", "اوصفلي نفسك", "about_bot");
manger.addDocument("ar", "صف لي نفسك", "about_bot");
manger.addDocument("ar", "وصفلي لي نفسك", "about_bot");
manger.addDocument("ar", "شو الفايدة منك", "about_bot");
manger.addDocument("ar", "شو الفايدة من البوت", "about_bot");
manger.addDocument("ar", "شو فايدة من البوت", "about_bot");
manger.addDocument("ar", "شو رح استفيد من البوت", "about_bot");

// QUESATION  age
manger.addDocument("ar", "قدي عمر البوت", "age");
manger.addDocument("ar", "قدي صرلو البوت منشأ", "age");
manger.addDocument("ar", "قدي صرلو  ", "age");
manger.addDocument("ar", "من ايمت معمول  ", "age");
manger.addDocument("ar", " من ايمت البوت شغال ", "age");
manger.addDocument("ar", " منذ كم الوت يعمل ", "age");
manger.addDocument("ar", " شو عمر البوت", "age");
manger.addDocument("ar", "حابب اعرف عمر البوت", "age");
manger.addDocument("ar", "حابب اعرف قدي صرلو البوت", "age");
manger.addDocument("ar", "متى تم انشاء البوت", "age");
manger.addDocument("ar", "متى تأنشأ البوت", "age");
manger.addDocument("ar", " ايمت عملتو البوت", "age");
manger.addDocument("ar", "متى قمتم بتشغيل البوت", "age");
manger.addDocument("ar", " ما عمر البوت", "age");


// QUESATION  bad
manger.addDocument("ar", "هالبوت كتير غبي", "bad");
manger.addDocument("ar", "  شو هالبوت البطئ", "bad");
manger.addDocument("ar", " لي هيك البوت غبي", "bad");
manger.addDocument("ar", " ما حبيت هالبوت", "bad");
manger.addDocument("ar", " البوت بهوي", "bad");
manger.addDocument("ar", " هالبوت ما منيح ", "bad");
manger.addDocument("ar", "انت سيئ جدا", "bad");
manger.addDocument("ar", "البوت سيئ جدا", "bad");
manger.addDocument("ar", " روح عنا ولو", "bad");
manger.addDocument("ar", "اسوء بوت بشوفو", "bad");
manger.addDocument("ar", " اسوء بوت بشوفو بحياتي", "bad");
manger.addDocument("ar", "استجابتك بطيئة", "bad");
manger.addDocument("ar", "يع ", "bad");
manger.addDocument("ar", "تفه ", "bad");
manger.addDocument("ar", "تفوو ", "bad");
manger.addDocument("ar", "روحو حسنو البوت  ", "bad");
manger.addDocument("ar", "البوت تبعكم زبالة", "bad");
manger.addDocument("ar", "كتير الرد بطيئ", "bad");
manger.addDocument("ar", "زبالة", "bad");
manger.addDocument("ar", "هالبوت بضحك", "bad");
manger.addDocument("ar", "هالبوت بخزي ", "bad");
manger.addDocument("ar", " روحو طورو حالكم ", "bad");
manger.addDocument("ar", " روحو حسنو حالكم ", "bad");
manger.addDocument("ar", " انقلع ", "bad");
manger.addDocument("ar", " انقلع ", "bad");
manger.addDocument("ar", " شغلكم سيئ ", "bad");
manger.addDocument("ar", "  البوت غير جيد ", "bad");
manger.addDocument("ar", "الله لا يوفقك", "bad");
manger.addDocument("ar", "لا سامحكم الله", "bad");
manger.addDocument("ar", "البوت غير مفيد", "bad");
manger.addDocument("ar", "لا داعي للبوت", "bad");
manger.addDocument("ar", "غير مفيد", "bad");
manger.addDocument("ar", "غير مثمر", "bad");



// QUESATION  master
manger.addDocument("ar", "مين مدير البوت", "master");
manger.addDocument("ar", "من المدير", "master");
manger.addDocument("ar", "مين معلمك ", "master");
manger.addDocument("ar", "مين اصحاب البوت  ", "master");
manger.addDocument("ar", "كام مدير ", "master");
manger.addDocument("ar", " شو اسم مدير البوت", "master");
manger.addDocument("ar", "ما اسم مدير البوت ", "master");
manger.addDocument("ar", "ما اسماء مدراء البوت ", "master");
manger.addDocument("ar", " مين البوس  ", "master");
manger.addDocument("ar", " مين مالك البوت ", "master");
manger.addDocument("ar", " مين صاحب البوت ", "master");
manger.addDocument("ar", " لمين البوت ", "master");
manger.addDocument("ar", " من صنع البوت ", "master");
manger.addDocument("ar", " مين صنع البوت ", "master");
manger.addDocument("ar", " مين الي انشأ البوت ", "master");
manger.addDocument("ar", "من المبرمج", "master");
manger.addDocument("ar", "مين الي برمجك", "master");
manger.addDocument("ar", "مين الي صنعك", "master");
manger.addDocument("ar", " ما اسم مبرمج البوت", "master");
manger.addDocument("ar", "من صاحاب المشروع", "master");
manger.addDocument("ar", " لمين هالبوت ", "master");
manger.addDocument("ar", "  مين صاحب البوت ", "master");


// QUESATION  help
manger.addDocument("ar", "فيك تساعدني", "help");
manger.addDocument("ar", "بدي مساعدتك خيو", "help");
manger.addDocument("ar", "بدي  مساعدة", "help");
manger.addDocument("ar", "هل يمكنك مساعدتي", "help");
manger.addDocument("ar", "هل يمكنك تقديم السماعدة لي", "help");
manger.addDocument("ar", "بدي ياك تساعدني بشغلة", "help");
manger.addDocument("ar", " فيك تخدمني", "help");
manger.addDocument("ar", "ساعدني", "help");
manger.addDocument("ar", "اسعفني", "help");
manger.addDocument("ar", "هيلب مي", "help");
manger.addDocument("ar", "قدي فيك تخدمني", "help");
manger.addDocument("ar", "قدي فيك تساعدني", "help");
manger.addDocument("ar", "كم يمكنك مساعدتي", "help");
manger.addDocument("ar", "فيك تساعدني", "help");
manger.addDocument("ar", "بدي خدمة", "help");
manger.addDocument("ar", "فيني عذبك؟", "help");

// QUESATION  truth
manger.addDocument("ar", " اكيد هالمعلومات صح", "truth");
manger.addDocument("ar", " اكيد هالمعلومات صحيحة", "truth");
manger.addDocument("ar", " يا ترى هالمعلومات صحيحة", "truth");
manger.addDocument("ar", " يا ترى  انت عم تحكي الحقيقة ؟", "truth");
manger.addDocument("ar", " انت عم تحكي الحقيقة ؟", "truth");
manger.addDocument("ar", " هالمعلومات اكيدة", "truth");
manger.addDocument("ar", "شو مصداقية الكلام", "truth");
manger.addDocument("ar", "هل المعلومات صحية ام لا", "truth");

// QUESATION  sorry
manger.addDocument("ar","انا اسف", "sorry");
manger.addDocument("ar","انا بعتذر", "sorry");
manger.addDocument("ar"," عفوا", "sorry");
manger.addDocument("ar"," اسف كتير", "sorry");
manger.addDocument("ar","هاد خطئي", "sorry");
manger.addDocument("ar"," لحظة اسف", "sorry");
manger.addDocument("ar","سامحني", "sorry");


// QUESATION  bye
manger.addDocument("ar","يلا باي", "bye");
manger.addDocument("ar","باي باي ", "bye");
manger.addDocument("ar","وداعا ", "bye");
manger.addDocument("ar","يلا سلام باي ", "bye");
manger.addDocument("ar","بايات ", "bye");
manger.addDocument("ar","مع السلامة", "bye");
manger.addDocument("ar"," بدي روح", "bye");
manger.addDocument("ar"," نعست ", "bye");
manger.addDocument("ar","يلا حاج باي ", "bye");
manger.addDocument("ar","يلا  فرقني نعست ", "bye");
manger.addDocument("ar"," تعبت", "bye");
manger.addDocument("ar"," منحكي بعدين", "bye");
manger.addDocument("ar"," كتير معصب", "bye");
manger.addDocument("ar","  معصب", "bye");
manger.addDocument("ar","  دايقة خلاقي", "bye");
manger.addDocument("ar"," مالل", "bye");
manger.addDocument("ar","طاقة روحي", "bye");
manger.addDocument("ar"," كرهان حالي", "bye");


// ANSWERS welcome
manger.addAnswer("ar", "welcome", "اهلا");
manger.addAnswer("ar", "welcome", "كيفك انت");
manger.addAnswer("ar", "welcome", "الحمدلله");
manger.addAnswer("ar", "welcome", "منيح وأنت ؟");
manger.addAnswer("ar", "welcome", "منيح ");
manger.addAnswer("ar", "welcome", " اهلين كيفك انت؟");
manger.addAnswer("ar", "welcome", "  جيد وأنت ؟" );
manger.addAnswer("ar", "welcome", "لله الحمد والمنة");
manger.addAnswer("ar", "welcome", "بأفضل حال, شكرا");
manger.addAnswer("ar", "welcome", " اهلا بك صديقي");
manger.addAnswer("ar", "welcome", " اهلا بك");
manger.addAnswer("ar", "welcome", "  تفضل كيف اساعدك؟");
manger.addAnswer("ar", "welcome", " كيف اخدمك ؟");




// ANSWERS job
manger.addAnswer("ar", "job", "يقوم البوت بتقديم خدمات بحث ");
manger.addAnswer("ar", "job","نقوم بتقديم خدمات قرئانية واسلامية" );
manger.addAnswer("ar", "job", "هدفنا تقديم خدمات اسلامية");
// ANSWERS about_bot
manger.addAnswer("ar", "about_bot", "انا بوت مساعد لك   ");
manger.addAnswer("ar", "about_bot", "انا بوت مدرب لمساعدتك");
manger.addAnswer("ar", "about_bot", "انا بوت مدرب لارشادك  ");

// ANSWERS  age
manger.addAnswer("ar", "age", " البوت منشأ جديدا");
manger.addAnswer("ar", "age", " البوت جديد نسبيا");

// ANSWERS  bad
manger.addAnswer("ar", "bad", " هذا من لطفك يا مهذب 😊");
manger.addAnswer("ar", "bad", " هذا رأيك الشخصي 😊");
manger.addAnswer("ar", "bad", " شكرا على  رأيك الشخصي 😊");
manger.addAnswer("ar", "bad", " شكرا لك يا مهذب 😊");

// ANSWERS  master
manger.addAnswer("ar", "master", "المهندس : محمد نور الديب ");


// ANSWERS  help
manger.addAnswer("ar", "help", " بالطبع انا مصمم لذلك");
manger.addAnswer("ar", "help", " بالطبع انا سأكون مسرور بذلك");
manger.addAnswer("ar", "help", " يمكنك اعتباري مساعدك الشخصي");
manger.addAnswer("ar", "help", " سأسر بذذلك بكل تأكيد");

// ANSWERS  truth
manger.addAnswer("ar", "truth", " بالطبع معلوماتي مؤكدة ");
manger.addAnswer("ar", "truth", " أنا لا أقدم الا الحقائق ");

// ANSWERS  sorry
manger.addAnswer("ar", "sorry", " لا تهتم ");
manger.addAnswer("ar", "sorry", "لا تتأسف فهذه مهمتي ");
manger.addAnswer("ar", "sorry", " لا داعي لذلك");

// ANSWERS  bye
manger.addAnswer("ar", "bye", "الى اللقاء ,سأكون قريبا");
manger.addAnswer("ar", "bye", " وداعا نتحدث لاحقا");
manger.addAnswer("ar", "bye", "أنا معك متى شئت , وداعا الأن");





async function trainModel() {
  await manger.train();
  await manger.save('./model.nlp'); // Save the trained model
}

trainModel().then(() => console.log("Training and saving done"));
  module.exports ={manger}