const { Op } = require("sequelize");
const { Quran } = require("../models");

exports.getAyaFromWord = async(word, limit, offset)  => {

  try {
    const {rows:results, count:total} = await Quran.findAndCountAll({
        raw: true,
        limit,
        offset,
        attributes: ["id", "ayah_text_clear", "surah_name", "ayah"],
        where: {
          ayah_text_clear: { [Op.like]: `%${word}%` }
        },

      })
    const hasNextPage = total > offset + results.length;

    return {
      results,
      pagination: {
        hasNextPage,
        nextPage: hasNextPage ? Math.floor(offset / limit) + 2 : null
      }
    };
  } catch (err) {
    console.error("Error searching Quran:", err);
    throw err;
  }
};
exports.getAyahTranslation = async (id) => {
  let ayah= await Quran.findOne({
      raw:true,
      attributes:["ayah_en"],
      where:{
        id
      }
        }) 
        return ayah
};

exports.getAyahPlace = async (id) => {
   let ayah= await Quran.findOne({
      raw:true,
      attributes:["place_of_revelation","surah_name"],
     
      where:{
        id
      }
        }) 
        return ayah
};