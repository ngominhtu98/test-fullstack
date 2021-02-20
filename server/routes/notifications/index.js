const router = require('express').Router();
const { Controller } = require('../../app/modules/notifications');


router.get("/view", Controller.getMany)
router.get("/viewAll", Controller.getJoinMany)
router.get("/viewByUser", Controller.getManyByUser)
router.get("/view/:id", Controller.getOne)
router.post("/create", Controller.create)
router.put("/update/:id", Controller.update)
router.delete("/delete/:id", Controller.deleteOne)
router.delete("/delete/", Controller.deleteMany)


module.exports = router;