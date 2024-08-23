const express = require("express");
const router = express.Router();

const  {displayTemp, addTemp, editTemp, TempDelete } = require('../controller(db)/templateController');
//const { add, post, put, remove } = require('../Controller/employeeController');

router.route('/displayTemp').get(displayTemp);
router.route('/addTemp').post(addTemp);
router.route('/editTemp/:id').post(editTemp);
router.route('/deleteTemp/:id').delete(TempDelete);
// router.route('/addEmployee').get(addEmployee);

// router.route('/created').post(post);
// router.route('/updated').post(put);
// router.route('/AddDevice').post(remove);


module.exports = router;