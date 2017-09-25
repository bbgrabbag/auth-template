//This route allows us to verify that the token we have in local storage is authorized
//Routes for editing and deleting profiles may be added here.

const express = require("express");
const expressJwt = require("express-jwt");

const config = require("../config");
const UserModel = require("../models/user");

const profileRoute = express.Router();

const authorization = expressJwt({ secret: config.secret });
profileRoute.use(authorization);

profileRoute.route("/verify")
    .get((req, res) => {
        UserModel.findById(req.user._id, (err, user) => {
            if(err){
                res.status(500).send({
                    success: false,
                    err
                })
            } else {
                if(user === null){
                    res.status(404).send({
                        success: false,
                        err: "That user doesn't exist!"
                    })
                } else {
                    res.status(200).send({
                        success: true,
                        user: user.withoutPwd()
                    })
                }
            }
        })
    });

module.exports = profileRoute;
