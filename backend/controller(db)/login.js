const db = require("./connection");
//need to add exception handling
//to find existing user in db
function findOne(user, loginCallback) {
    
    const userCreds=user;
    console.log(userCreds);
            db.query("SELECT adminEmail, adminPassowrd FROM admin WHERE adminEmail = ?",[userCreds.email], (err, data, fields)=>{
                if(err){
                    loginCallback(err);
                }else{
                    if(data.length!==0){
                        console.log(data[0].adminEmail)
                        if(userCreds.password === data[0].adminPassowrd){
                            console.log("PAssword matched");
                            loginCallback(true);
                        }else{
                            console.log("Password match fail.")
                            loginCallback(false);
                        }
                    }else{
                        console.log("user not found")
                        loginCallback(false);
                    }
                }
            })
        }

module.exports = findOne;