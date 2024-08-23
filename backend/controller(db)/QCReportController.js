const db = require('./connection');


const QcReport = (req, res) => {
    var template=req.params.template;
    var itemNum=req.params.itemNum;
    console.log("template",template)
    console.log("itemNum",itemNum)
    if (template === "All"){
        if(itemNum === 'All'){
            sql = `SELECT  * FROM tempassign WHERE QCstatus != 'Rejected' && template !=""`;  
            db.query(sql,[template], (err, data) => {
                if (err) return res.json(err);
                console.log(data)
                return res.json(data);
            })
        } else{
            sql = `SELECT  * FROM tempassign WHERE QCstatus != 'Rejected' && template !="" && itemNo = ?`;
            db.query(sql,[itemNum], (err, data) => {
                if (err) return res.json(err);
                console.log(data)
                return res.json(data);
            })
        }
       
    }else{
        if(itemNum === 'All'){
            sql = `SELECT  * FROM tempassign WHERE QCstatus != 'Rejected' && template = ?`;  
            db.query(sql,[template], (err, data) => {
                if (err) return res.json(err);
                console.log(data)
                return res.json(data);
            })
        } else{
            sql = `SELECT  * FROM tempassign WHERE QCstatus != 'Rejected' && template = ? && itemNo = ?`;
            db.query(sql,[template,itemNum], (err, data) => {
                if (err) return res.json(err);
                console.log(data)
                return res.json(data);
            })
        }

        }
       
}

const GetTemplate = (req, res) => {

const sql = `SELECT tempName FROM qctemplate`

    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        console.log(data)
        return res.json(data);
    })
}


const GetItemNo  = (req, res) => {

    const sql = `SELECT itemNo FROM tempassign`
    
        db.query(sql, (err, data)=>{
            if(err) return res.json(err);
            console.log(data)
            return res.json(data);
        })
    }

const getTemplateMinMax = (req, res) => {
    
    const templateName = req.params.template;
    const sql = `SELECT * FROM qcreading WHERE forid = (SELECT id FROM qctemplate WHERE tempName = ?)`

    db.query(sql,[templateName], (err, data)=>{
        if(err) return res.json(err);
        console.log(data)
        return res.json(data);
    })
}

module.exports = { QcReport, GetTemplate, GetItemNo, getTemplateMinMax }