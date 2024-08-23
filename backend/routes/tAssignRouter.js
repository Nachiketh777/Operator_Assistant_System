const express = require("express");
const router = express.Router();

const  {displayTempAssign, updateTemplate,dropdownData, addTempAssign} = require('../controller(db)/tAssisgnController');
// const { DropdownData } = require("../../client/src/ApiService");

//const { add, post, put, remove } = require('../Controller/employeeController');

router.route('/displayTempAssign').get(displayTempAssign);
router.route('/Dropdowndata').get(dropdownData);
router.route('/displayTempAssign/updateTemplate').post(updateTemplate);
router.route('/addTempAssign').post(addTempAssign);
// router.route('/addEmployee').post(addEmployee);

// router.route('/created').post(post);
// router.route('/updated').post(put);
// router.route('/AddDevice').post(remove);


module.exports = router;