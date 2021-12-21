const { Router } = require('express');

const userController = require("../controller/userController")

const router = Router();

router.get('/user', userController.getC );

router.post('/user', userController.postC);

router.delete('/user', userController.deleteC);

router.patch('/user', userController.patchC);



module.exports = router