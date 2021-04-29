const path = require('path')
const express = require('express')
var cors = require('cors')

const champions = require('./routes/champions')
const drafts = require('./routes/drafts')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/v1/champions', champions)
server.use('/api/v1/drafts', drafts)

server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
