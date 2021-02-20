const router = require('express').Router();
const { Controller } = require("../app/modules/users");

router.use('/auth', require('./auth'));
router.post("/users/create", Controller.create)


module.exports = router;
