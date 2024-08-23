const LoginCont = require("../controller(db)/login");

function LoginLogic(loginCreds){
        console.log(loginCreds.user)
        let dbData = LoginCont(loginCreds.user, (data)=>{
                console.log(data.adminEmail);
                if(data.adminPassowrd === loginCreds.password){
                        return true
                }else{
                        return false
                }
        })
        //console.log("returned:" +dbData);
        // if (dbData.length === 0){
        //         return  false
        // }else{
        //         if(dbData.passwrod === loginCreds.password){
        //                 console.log("Matched")
        //         }else{
        //                 console.log("unknown")
        //         }
        // }
         };

module.exports = LoginLogic;