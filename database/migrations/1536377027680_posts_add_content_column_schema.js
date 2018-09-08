'use strict'

const Schema = use('Schema')

class PostsAddContentColumnSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.text('content', 'varchar')
    })
  }

  down () {
    this.table('posts', (table) => {
      // reverse alternations
      table.dropColumn('content')
    })
  }
}

module.exports = PostsAddContentColumnSchema
