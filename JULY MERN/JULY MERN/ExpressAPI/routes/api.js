const express = require('express');
const Avenger = require('../models/avenger');

const routes = express.Router();


routes.get('/avengers', (req, res, next) => {
    Avenger.find({}).then( avenger => {
        res.send(avenger);
    })
})

routes.post('/avengers', (req, res, next) => {

    console.log( req.body);
    // const newAvengerIncoming = new Avenger({ name: req.body.name, avenger: req.body.name, alive: req.body.alive})
    // newAvengerIncoming.save();

    // Unfullfilled - reject     or Fulfilled - resolve
    Avenger.create(req.body).then( data => {
        res.status(201).send(data);
    }).catch(next);  // Go to the next middleware if promiise is rejected.
})

routes.put('/avengers/:id', (req, res, next) => {
    // console.log(req.param, req.params);
    Avenger
        .findByIdAndUpdate({_id: req.params.id}, {name: req.body.name}, {useFindAndModify: false, new: true})
        .then( data => {
            res.status(200).send(data)
        }).catch(next);
    })

routes.delete('/avengers/:id', (req, res, next) => {
    Avenger
        .findByIdAndDelete({_id: req.params.id}, {useFindAndModify: false})
        .then( data => {
            res.send(data)
        }).catch(next);
    })

module.exports = routes;