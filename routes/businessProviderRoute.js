'use strict';
const router = require("express").Router();
const businessProviderController = require("../Controller/businesProviderController")

router.route('/create-new-businessProvider').post(businessProviderController.create_businessProvider);
router.route('/get-all-businessProvider').get(businessProviderController.get_all_businessProvider);



module.exports =router