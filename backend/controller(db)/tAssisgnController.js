const db = require('./connection');

const displayTempAssign = (req, res) => {
    const sql = "SELECT * FROM tempassign";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}

const addTempAssign = (req, res) => {
    const  sql = "INSERT INTO tempassign (`produPlanNo`,`custPoNo`,`saleOrdNo`,`itemNo`,`drawNo`) VALUES (?,?,?,?,?)"
    const values = [
        req.body.produPlanNo,
        req.body.custPoNo,
        req.body.saleOrdNo,
        req.body.itemNo,
        req.body.drawNo,
    ]
    db.query(sql, values, (err,data) => {
        if(err) {
        console.log(err)
            return res.json(err);}
        return res.json({'message': 'New QualityField added successfully'})
    })

}

const dropdownData = (req, res)=> {
    const sql = "SELECT id, tempName from qctemplate";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
const updateTemplate = (req, res) => {
    // const sql = "UPDATE tempassign SET `template`='temp2' WHERE id=1";
    const template=req.body.templateValue
    const id=req.body.id
    const forid = req.body.forid
    const qcSql = `SELECT displayLabel, expectedValue from qcreading WHERE forid = ${forid}`
    
    console.log("QcSwl")
    db.query(qcSql, (err, data)=>{
        if (err){
            return res.json(err)
        }
      const qc = data.map((d)=>{
        const tempKey = d.displayLabel
        const tempValue = d.expectedValue
        return {[tempKey]: tempValue}
    
      })
      console.log("qcValues", qc)
      let jsonQc = {...qc}
      jsonQc =JSON.stringify(jsonQc)
      console.log("qcjson", jsonQc)
      console.log("value in backend : ")
      const sql ="UPDATE `tempassign` SET `template`=?, `qc`=? WHERE `id`=?"
      db.query(sql,[template,jsonQc,id], (err, data)=>{
          if (err) {console.log(err)
            return res.json(err);}
          return res.json({'message': 'Template updated successfully.',data})
      })  
    })

}

const qcDataUpdate = (req, res) => {
    console.log("current Date", new Date())
    const values = [
        
         req.body.data.QCstatus,
         req.body.data.assemblyNo,
         req.body.data.inspectedDate,
         req.body.data.DieDiameter,
         req.body.data.serialNo,
         req.body.data.BCDref,
         req.body.data.BCDorderNo,
         req.body.data.customerPhone,
         req.body.data.OrderDueDate,
         req.body.data.SalesOrder,
         req.body.data.ShellMaterial,
         req.body.data.ShippedDate,
         req.body.data.TagNo,
        //  req.body.data.JournalDiameterDrive,
        //  req.body.data.FaceSize,
         req.body.data.InspectorComments,
         req.body.data.QCreading,
         req.body.data.drawNo,
         req.body.data.itemNo,
         req.body.data.readingUploadTime,
         req.body.data.comments,
         req.body.data.id
        
    ];
    console.log("uploadTime",typeof(req.body.data.readingUploadTime))
    console.log("values", values)

    const sql = "UPDATE tempassign SET `QCstatus`=?, `assemblyNo`=?, `inspectedDate`=?, `DieDiameter`=?, `serialNo`=?, `BCDref`=?, `BCDorderNo`=?, `customerPhone`=?, `OrderDueDate`=?, `SalesOrder`=?, `ShellMaterial`=?, `ShippedDate`=?, `TagNo`=?, `InspectorComments`=?, `qc`=?, `drawNo`=?, `itemNo`=?, `readingUploadTime`=?, `rejectedComment`=? WHERE `id`=?"
    db.query(sql,values, (err, data)=>{
        console.log(sql)
        console.log(err)

        if (err) {  
            return res.json(err)};
        console.log("Inserted")
        return res.json({'message': 'QC Actual data  is updated successsfully.', data}) 
    })

}

const qcGetData = (req, res) => {
    const tempName = req.query.tempName;
    const rowId=req.query.rowId;
    let result = []
    let tempNameId;
    
    console.log(tempName)
    console.log(rowId)
    const sql = `SELECT * FROM qctemplate WHERE tempName=?`
    db.query(sql,tempName, (err, data) => {
        if (err) {console.log(err)
        return res.json("Error303");}
        tempNameId = data
        console.log("tempNameId", tempNameId[0].tempName)
        const sql1 = `SELECT * FROM tempassign WHERE id=${rowId}`
        const sql2 = `SELECT * FROM qcreading WHERE forid=${tempNameId[0].id}`
        console.log("Hi")
        db.query(sql1, (err, data1) => {
            console.log("data1",data1)
            if (err) return res.json("Error");
            result[0] =data1
            db.query(sql2, (err, data2) => {
                console.log("data2",data2)
                if (err) return res.json("Error");
                result[1] = data2
                console.log("result", result)
                return res.json(result);
            })
        })
    })
    
}
module.exports = {displayTempAssign, updateTemplate, qcDataUpdate, dropdownData,qcGetData, addTempAssign};