const express = require('express')
const router = express.Router()

const {read, list, create, update, remove} = require("../controllers/product")

const { auth } = require('../middleware/auth')

router.get('/product',auth ,list)
router.get('/product/:id',read)
router.post('/product/:id',create)
router.put('/product/:id',update)
router.delete('/product/:id',remove)



module.exports = router