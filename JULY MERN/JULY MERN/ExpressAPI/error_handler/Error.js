module.exports = (err, req, res, next) => {
    if( err.errors)
        res.status(422).send({ error: err._message})
    else res.send(err);
    // res.send(err);
}

