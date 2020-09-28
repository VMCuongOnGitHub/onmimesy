const Sequelize = require("sequelize")
const db = require("../database/db");

module.exports = db.sequalize.define(
  "apps",
  {
    app_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    app_name: {
      type: Sequelize.STRING,
    },
    webhook_url: {
      type: Sequelize.STRING
    },
    zalo_access_token: {
      type: Sequelize.STRING
    },
    viber_access_token: {
      type: Sequelize.STRING
    },
    created_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },{
    timestamps: false
  }
)
