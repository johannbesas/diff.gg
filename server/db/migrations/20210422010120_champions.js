
exports.up = function (knex) {
    return knex.schema.createTable('champions', table => {
        table.increments('id').primary()
        table.string('name')
    })
}

exports.down = knex => {
    return knex.schema.dropTable('champions')
}
