require("dotenv").config();

module.exports = {
  dialect: "postgres",
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_UNAME,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: true,
    undercored: true,
  }
}