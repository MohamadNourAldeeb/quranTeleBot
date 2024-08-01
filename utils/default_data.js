const fs = require('fs');
const csvParser = require('csv-parser');
const { Quran } = require('../models/index');

const { Ayah_words } = require('../models/index');
const { removeDiacritics } = require('./modifyText/removeDiacritics');
const { where } = require('sequelize');
const { raw } = require('mysql2');

let readFromCsv=()=>{
// ###########################################################################
// add ayat
// ###########################################################################
//     fs.createReadStream('./islam/quran/quran.csv')
//     .pipe(csvParser())
//     .on('data',async (row) => {
  
//       await Quran.create({
//         ayah_in_quran_number:row.ayah_no_quran,
//         surah_name: row.surah_name,
//         surah_number: row.surah_no,
//         ayah_in_surah_number:row.ayah_no_surah,
//         ayah: row.ayah,
//         ruko_number:row.ruko_no,
//         total_ayah_surah: row.total_ayah_surah
//         })
//     const inputString =row.list_of_words
// const wordsArray = inputString.replace(/\[/g, '').replace(/\]/g, '').split(',');

//         wordsArray.map(async(item)=>{

//             await Ayah_words.create({
//                 ayah_id:row.ayah_no_quran,
//                 word: item,
//                 wihtout_diacritics: removeDiacritics(item)
             
//                 }) 
//         })
       
//     })
//     .on('end', () => {
//       console.log('CSV file successfully processed');
    
//     });


// ###########################################################################
// add text clean 
// ###########################################################################


    // fs.createReadStream('./islam/clear/ayah_text_clear.csv')
    // .pipe(csvParser())
    // .on('data',async (row) => { 
     
    //   await Quran.update(
    //  { ayah_text_clear: row.text },
    //  { where:{ ayah_in_surah_number:row.ayah ,surah_number:row.sorah}}
        
    //     )
    // })
    // .on('end', () => {
    //   console.log('CSV file successfully processed');
    // });


// ###########################################################################
// add ayah in en and place_of_revelation
// ###########################################################################
// fs.createReadStream('./islam/translation/english/The Quran Dataset.csv')
// .pipe(csvParser())
// .on('data',async (row) => { 
//   await Quran.update(
//  { ayah_en: row.ayah_en ,place_of_revelation:row.place_of_revelation},
//  { where:{ ayah_in_surah_number:row.ayah_no_surah ,surah_number:row.surah_no}}
    
//     )
// })
// .on('end', () => {
//   console.log('CSV file successfully processed');
// });



}
module.exports ={readFromCsv}
readFromCsv()