//const loginLogic = require("../Logic/loginLogic");
const loginController = require("../controller(db)/login")
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.route("/login").post((req,res)=>{
    const parameter = req.body;
    console.log(parameter)
    loginController(parameter, (loginState)=>{

        if(loginState){
            console.log("route true")
            return res.json({loginState:true})
        }else{
            console.log("route false")
            return res.status(401).json({loginState:false})
        }

    });
})
module.exports = router;