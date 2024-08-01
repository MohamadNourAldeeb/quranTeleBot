const dotenv =require( "dotenv");
dotenv.config();
const { sequelize } =require("../utils/connect") ;
const { DataTypes, Model } =require( "sequelize");
class Sunah extends Model {}

Sunah.init(
  {
    source: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    chapter_no: { type: DataTypes.INTEGER, allowNull:false  },
    hadith_no: { type: DataTypes.INTEGER, allowNull:false  },
    chapter: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      text_ar: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
      text_ar_clean: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
      text_en: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
   
  },
  {
    sequelize,
    tableName: "sunah",
    freezeTableName: true,
    timestamps: true,
    updatedAt: false,
    paranoid: false,

  }
);

module.exports =Sunah;
