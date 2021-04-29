const express = require('express')

const db = require('../db/drafts')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    db.listDrafts()
        .then((drafts) => {
            res.json(drafts)
            return null
        })
        .catch((err) => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.post('/', (req, res) => {
    const draft = req.body
    db.addDraft(draft)
        .then((drafts) => {
            res.json(drafts)
            return null
        })
        .catch((err) => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})