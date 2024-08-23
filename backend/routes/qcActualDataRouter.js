const express = require("express");
const router = express.Router();

const { qcDataUpdate, qcGetData } = require("../controller(db)/tAssisgnController")

router.route("/qcreadings").get(qcGetData);
router.route("/updateqcactual").post(qcDataUpdate);

module.exports = router;