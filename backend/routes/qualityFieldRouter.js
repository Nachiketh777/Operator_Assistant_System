const express = require("express");
const router = express.Router();

const {displayQC, addQC, editQC, deleteQC} = require("../controller(db)/qualityFieldController");


// router.route('/displayqc/:rowid').get(displayQC);
router.route('/displayqc/:id').get(displayQC);
router.route('/addqc').post(addQC);
router.route('/editqc/:id').post(editQC);
router.route('/deleteqc/:id').delete(deleteQC);

module.exports = router;