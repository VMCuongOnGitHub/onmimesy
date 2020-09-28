const Sequelize = require("sequelize")
const db = require("../database/db");

module.exports = db.sequalize.define(
  "users",
  {
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    account_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    account_password: {
      type: Sequelize.STRING
    },
    register_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },{
    timestamps: false
  }
)
