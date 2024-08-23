const express = require("express")
const router = express.Router();

const { getItemCountsAndEfficiency, itemTestedPerHour } = require('../controller(db)/dashboardController')

router.route("/itemCounts").get(getItemCountsAndEfficiency);
router.route("/testedPerHour").get(itemTestedPerHour)

module.exports = router;