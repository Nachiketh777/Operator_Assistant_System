const db = require('./connection');

const displayTemp = (req, res) => {
    const sql = "SELECT id, tempName, description FROM qctemplate";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}

const addTemp = (req,res) => {
    const sql = "INSERT INTO qctemplate (`tempName`,`description`)VALUES(?,?)";
    const values = [
        
        req.body.tempName,
        req.body.description
    ]
    db.query(sql, values, (err,data) => {
        if(err) return res.json(err);
        return res.json({'message': 'New Template added successfully'})
    })
}

const editTemp = (req, res) => {
    const sql = "update qctemplate set `tempName`=?,`description`=? where id=?";
    const values = [

        req.body.tempName,
        req.body.description,
        req.params.id
    ]

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Template edited successfully' });
    })
}

const TempDelete = (req, res) => {
    const sql = "DELETE FROM qctemplate WHERE id=?";

    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ 'message': 'Template deleted successfully' });
    });
}

module.exports = {displayTemp, addTemp, editTemp, TempDelete};