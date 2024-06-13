'use strict';
const router = require("express").Router();
// const businessProviderController = require("../Controller/businesProviderController")
const adminUserController = require("../Controller/adminUserController")
router.route('/create-new-adminUser').post(adminUserController.create_adminUser);
router.route('/login-adminUser').post(adminUserController.login_adminUser);
router.route('/get-all-adminUser').get(adminUserController.get_all_adminUser);
router.route('/update-adminUser/:id').put(adminUserController.update_adminUser);  
router.route('/delete-adminUser/:id').delete(adminUserController.delete_adminUser); 




module.exports =router