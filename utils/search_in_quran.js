const { Op } = require("sequelize")
const {Quran } = require("../models")

let getAyaFromWord=async(word)=>{
  let ayah= await Quran.findAll({
      raw:true,
      where:{
        ayah_text_clear:{[Op.like]:`%${word}%`}
      }
        }) 
        return ayah
};

let getAyahTranslation=async(id)=>{

  let ayah= await Quran.findOne({
      raw:true,
      attributes:["ayah_en"],
      where:{
        id
      }
        }) 
        return ayah
};

let getAyahPlace=async(id)=>{

  let ayah= await Quran.findOne({
      raw:true,
      attributes:["place_of_revelation","surah_name"],
     
      where:{
        id
      }
        }) 
        return ayah
};

module.exports={getAyaFromWord,getAyahTranslation ,getAyahPlace}