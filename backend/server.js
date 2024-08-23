const db = require("./controller(db)/connection");
const express = require("express");
const login = require("./routes/loginRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const Temp = require('./routes/templateRouter');
const TempAssign = require('./routes/tAssignRouter');
const QcField = require('./routes/qualityFieldRouter');
const qcactual = require('./routes/qcActualDataRouter');
const QcReport = require("./routes/QCReportRoutes");
const dashBoard = require("./routes/dashboardRoutes");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use(express.json());
app.use("/api/auth", login)
app.use('/template', Temp);
app.use('/tempAssign', TempAssign);
app.use('/quality', QcField);
app.use('/qcactual',qcactual);
app.use('/qcreport', QcReport );
app.use('/dashBoard', dashBoard );
// app.use("/")



app.listen(3001, (req,res)=>{
    console.log("server is up and running")
})