const connection = require('./connection')

module.exports = {
    listDrafts, addDraft
}

function listDrafts(db = connection) {
    return db('drafts')
        .select()
}

function addDraft(draft, db = connection) {
    return db('drafts')
        .insert(draft)
        .then(() => db)
        .then(listDrafts)
}