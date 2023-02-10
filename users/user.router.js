const {createUser,getUsers,login,deleteUser} = require("./user.controller")
const router = require("express").Router()

router.post("/",createUser)
router.get("/get",getUsers)
router.post("/login",login)
router.delete("/delete",deleteUser)

module.exports=router