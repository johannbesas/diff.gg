exports.up = knex => {
    return knex.schema.createTable('drafts', table => {
      table.increments('id').primary()
      table.string('notes')
      table.string('redSide')
      table.int('redBan1').references()
      table.int('redBan2')
      table.int('redBan3')
      table.int('redBan4')
      table.int('redBan5')
      table.int('redPick1')
      table.int('redPick2')
      table.int('redPick3')
      table.int('redPick4')
      table.int('redPick5')
      table.string('blueSide')
      table.int('blueBan1')
      table.int('blueBan2')
      table.int('blueBan3')
      table.int('blueBan4')
      table.int('blueBan5')
      table.int('bluePick1')
      table.int('bluePick2')
      table.int('bluePick3')
      table.int('bluePick4')
      table.int('bluePick5')
    })
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('drafts')
  }
  