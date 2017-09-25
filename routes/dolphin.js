const express = require("express");
const expressJwt = require("express-jwt");

const DolphinModel = require("../models/dolphin");
const config = require("../config");

const dolphinRoute = express.Router();

const authorize = expressJwt({secret: config.secret})

dolphinRoute.use(authorize);

dolphinRoute.route("/")
    .get((req, res) => {
        DolphinModel.find(req.query, (err, dolphins) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(dolphins);
            }
        });
    })
    .post((req, res) => {
        let newDolphin = new DolphinModel(req.body);
        newDolphin.save((err, dolphin) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(dolphin);
            }
        });
    });
dolphinRoute.route("/:id")
    .get((req, res) => {
        DolphinModel.findById(req.params.id, (err, dolphin) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (dolphin === null) {
                    res.status(404).send({
                        success: false,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send(dolphin);
                }
            }
        });
    })
    .delete((req, res) => {
        DolphinModel.findByIdAndRemove(req.params.id, (err, dolphin) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (dolphin === null) {
                    res.status(404).send({
                        success: true,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send({
                        success: true,
                        id: dolphin._id
                    });
                }
            }
        })
    })
    .put((req, res) => {
        DolphinModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, dolphin) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (dolphin === null) {
                    res.status(404).send({
                        success: false,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send(dolphin);
                }
            }
        });
    });


module.exports = dolphinRoute;