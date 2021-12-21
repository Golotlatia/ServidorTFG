const { Router } = require('express');

const restController = require("../controller/restController")

const router = Router();

//router.get('/', restController.getC );

router.post('/', restController.postC);

router.delete('/', restController.deleteC);

router.patch('/', restController.patchC);



module.exports = router