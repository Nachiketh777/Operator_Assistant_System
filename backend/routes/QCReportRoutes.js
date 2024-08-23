const express = require("express");
const router = express.Router();

const { QcReport, GetTemplate, GetItemNo, getTemplateMinMax } = require("../controller(db)/QCReportController")

router.route("/displayQcReport/:template/:itemNum").get(QcReport);
router.route("/getminmax/:template").get(getTemplateMinMax);
router.route("/getTemplate").get(GetTemplate);
router.route("/getItemNo").get(GetItemNo);

module.exports = router;