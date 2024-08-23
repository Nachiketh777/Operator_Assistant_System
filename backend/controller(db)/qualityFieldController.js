const db = require("./connection");

// const displayQC = (req, res) => {
    // const sql = "SELECT * FROM qctemplate";
//     // console.log("start")
//     // const row = req.params.rowid
//     // const row = req.body.rowid
//     // console.log(row)
//     // console.log("end")
    
//     //const sql = "SELECT * FROM tablequality";
//     // const id = req.params.id;
//     db.query(sql,row (err, data) => {
//         if (err) return res.json(err);
//         //console.log(data)
//         return res.json(data);
//     })
// }
const displayQC = (req, res) => {
        var id=req.params.id;
        const sql = `SELECT  * FROM qcreading where forid=${id}`;
        db.query(sql, (err, data) => {
            if (err) return res.json(err);
            console.log(data)
            return res.json(data);
        })
    }

const addQC = (req,res) => {
    const sql = "INSERT INTO qcreading (`forid`,`displaylabel`,`uom`,`expectedvalue`,`mintolerance`,`maxtolerance`)VALUES(?,?,?,?,?,?)";
    console.log(req.body.id)
    const values = [
        req.body.id,
        req.body.displaylabel,
        req.body.uom,
        req.body.expectedvalue,
        req.body.mintolerance,
        req.body.maxtolerance
    ]
    db.query(sql, values, (err,data) => {
        if(err) 
            return res.json(err);
        return res.json({'message': 'New QualityField added successfully'})
    })
}

const editQC = (req, res) => {
    const sql = "update qcreading set `displaylabel`=?,`uom`=?,`expectedvalue`=?,`mintolerance`=?,`maxtolerance`=? where id=?";
    const values = [

        req.body.displaylabel,
        req.body.uom,
        req.body.expectedvalue,
        req.body.mintolerance,
        req.body.maxtolerance,
        req.params.id
    ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Field edited successfully' });
    })
}

const deleteQC = (req, res) => {
    const sql = "DELETE FROM qctemplate WHERE id=?";

    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Field deleted successfully' });
    });
}

module.exports = {displayQC, addQC, editQC, deleteQC};