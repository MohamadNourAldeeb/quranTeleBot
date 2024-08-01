const mysql2 =require( "mysql2");
const { Sequelize } =require( "sequelize");
const dotenv =require("dotenv") ;
dotenv.config();

let DATABASE = process.env.DATABASE;
let USER = process.env.USER;
let PASSWORD = process.env.PASSWORD;
console.log({DATABASE});
let sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    dialect: "mysql",
    dialectModule: mysql2,
    host: process.env.HOST,
    port: parseInt(process.env.PORT_DB),
    define: {
        charset: process.env.CHARSET,
        collate: process.env.COLLATE,
    },
    logging: false,
});

const all =require("../models");
 
// sequelize
//   .sync({ alter: true })
//   .then(async () => { 
//     console.log("successfully created relationships with tables ✅✅");
//   })
//   .catch((err) => {
//     console.log({err});
//   });

module.exports= { sequelize };


