const dotenv =require( "dotenv");
dotenv.config();
const { sequelize } =require("../utils/connect") ;
const { DataTypes, Model } =require( "sequelize");
class Quran extends Model {}

Quran.init(
  {
    ayah_in_quran_number: { type: DataTypes.INTEGER, allowNull: false },
    surah_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    surah_number: { type: DataTypes.INTEGER, allowNull:false  },
    ayah_in_surah_number: { type: DataTypes.INTEGER, allowNull: false },
    ayah: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
      ayah_text_clear: {
        type: DataTypes.STRING(5000),
        allowNull: true,
      },
      ayah_en: {
        type: DataTypes.STRING(5000),
        allowNull: true,
      },
      place_of_revelation :{
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ruko_number: { type: DataTypes.INTEGER, allowNull: false },
      total_ayah_surah: { type: DataTypes.INTEGER, allowNull: false },


  },
  {
    sequelize,
    tableName: "quran",
    freezeTableName: true,
    timestamps: true,
    updatedAt: false,
    paranoid: false,

  }
);

module.exports =Quran;
