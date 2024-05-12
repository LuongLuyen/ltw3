const ApiController = require("../Controller/Api/api")
const router = require("express").Router()

router.get('/user/:id', ApiController.findOne)
router.get('/film/', ApiController.findAll)



module.exports = router