const { Router, json } = require('express');

const authController = require("../controller/authController")
const authGuard = require("../middleware/authGuard");


const router = Router();




//router.post('/getToken', authGuard, authController.getToken );

router.get('/getToken', authController.getToken );


router.get('/verifyToken', authController.verifyToken );
//router.delete('/auth/', restController.deleteC);

//router.patch('/auth/', restController.patchC);



module.exports = router