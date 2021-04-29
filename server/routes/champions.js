const express = require('express')

const db = require('../db/champions')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    db.listChampions()
        .then((champions) => {
            res.json(champions)
            return null
        })
        .catch((err) => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})
