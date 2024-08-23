const db = require("./connection");

const getItemCountsAndEfficiency = (req, res) => {
    // const totalCountSql = `SELECT COUNT(*) from tempassign WHERE QCstatus != ""`;
    // const approvedCountSql = `SELECT COUNT(*) from tempassign WHERE QCstatus != "Approved"`;
    // const rejectedCountSql = `SELECT COUNT(*) from tempassign WHERE QCstatus != "Rejected"`;

    const sql = `SELECT
                    COUNT(*) AS totalCount,
                    SUM(CASE WHEN QCstatus = 'Approved' THEN 1 ELSE 0 END) AS ApprovedCount,
                    SUM(CASE WHEN QCstatus = 'Rejected' THEN 1 ELSE 0 END) AS RejectedCount,
                    AVG(CASE WHEN QCstatus = 'Approved'THEN 1 ELSE 0 END)*100 As AvgCount
                FROM tempassign WHERE QCstatus != ''`
    
//     `SELECT
//     COUNT(*) AS totalCount,
//     SUM(CASE WHEN `QCstatus` = 'Approved' THEN 1 ELSE 0 END) AS ApprovedCount,
//     SUM(CASE WHEN `QCstatus` = 'Rejected' THEN 1 ELSE 0 END) AS RejectedCount,
//     AVG(CASE WHEN `QCstatus` = 'Approved'THEN 1 ELSE 0 END)*100 As AvgCount
// FROM `tempassign` WHERE 	`QCstatus` != ''`

    db.query(sql, (err, data) => {
        if (err){
            console.log("AVg", err)
            throw new Error("Error occured while executing the count query.")
        }

        console.log("Counts", data)
        return res.json(data)
    })
}

const  itemTestedPerHour = (req, res) => {
    // const sql = `SELECT readingUploadTime, COUNT(*) AS Counts FROM tempassign WHERE QCstatus != "" AND readingUploadTime BETWEEN ? AND ? GROUP BY DATE(readingUploadTime), HOUR(readingUploadTime)`;

    const sql = `SELECT 
                    readingUploadTime, COUNT(*) AS Counts, 
                    SUM(CASE WHEN QCStatus = 'Approved' THEN 1 ELSE 0 END) AS ApprovedCount,
                    SUM(CASE WHEN QCStatus = 'Rejected' THEN 1 ELSE 0 END) AS RejectedCount 
                FROM tempassign WHERE QCstatus != "" AND readingUploadTime BETWEEN ? AND ? GROUP BY DATE(readingUploadTime), HOUR(readingUploadTime);`

    const date = new Date();
    const dateTime = date.getFullYear() +"-"+ ((date.getMonth()/10)>=1? date.getMonth():("0"+date.getMonth())) +"-"+ ((date.getDate()/10)>=1?date.getDate():("0"+date.getDate()))
    const fromDate = dateTime+ " 00:00:00"
    const toDate = dateTime + " 23:59:59"
    console.log("DateTime")
    db.query(sql,[fromDate, toDate] ,(err, data) => {
        console.log(data)
        return res.json(data)
    })
}
module.exports = { getItemCountsAndEfficiency, itemTestedPerHour }