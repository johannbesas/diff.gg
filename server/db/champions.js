const connection = require('./connection')

module.exports = {
    listChampions, getChampionById
}

function listChampions(db = connection) {
    return db('champions')
        .select()
}

function getChampionById(id, db = connection) {
    return db('champions')
        .where('id', id)
        .select()
} 