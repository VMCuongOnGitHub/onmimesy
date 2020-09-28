const express = require("express")
const apps = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const idGenerated = require("../helper/helper")


const Apps = require("../models/Apps")
apps.use(cors())

process.env.SECRET_KEY = 'secret'


apps.post("/addApp", (req, res) => {
  const today = new Date()
  const appData = {
    app_id : idGenerated(32),
    app_name: req.body.app_name
  }

  Apps.findOne({
    where: {
      app_name: req.body.app_name
    }
  }).then(app => {
    if(!app){
      Apps.create(appData).then(app=>{
        res.json({status: app.app_name + " is created"})
      }).catch(err=>{
        res.send('error: ' + err)
      })
    }else{
      res.json({error: "app name is exist"})
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
})

apps.post("/deleteApp", (req, res) => {
  Apps.destroy({
    where:{
      app_id: req.body.app_id
    },
    force: true
  }).then((app)=>{
    res.json({status: app.app_name + " is deleted"})
  }).catch(err => {
    res.send("error : " + err)
  })
})

module.exports = apps
