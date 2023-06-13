const express = require('express');
const UserController = require('../controller/Usercontroller');

const router = express.Router();

router.get("/", UserController.getAll);
router.post("/",UserController.add)
router.put("/:id",UserController.update)
router.get("/:id",UserController.getById)
router.delete('/:id', UserController.delete);
module.exports = router;
