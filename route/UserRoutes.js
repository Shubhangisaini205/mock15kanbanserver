const express = require("express");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { UserModel } = require("../model/UserModel");

UserRouter.post("/signup", async (req, res) => {
    const { email, password } = req.body

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new UserModel({ email, password: hash });
            await user.save();
            res.status(200).send({ "msg": "User Registered Successfully" })
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({ err: error.message })
    }
})



UserRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    var token = jwt.sign({ userId:user._id, userEmail:user.email }, 'Kanban');
                    res.status(200).send({"msg":"Login Succesfully",token:token})
                } else {
                    res.status(200).send({ "msg": "Password is incorrect" })
                }
            });
        } else {
            res.status(200).send({ "msg": "Email is incorrect" })
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ err: error.message })
    }
})



module.exports = {
    UserRouter
}