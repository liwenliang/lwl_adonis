'use strict'

class PostController {
  index ({view}) {
    let pageTitle = 'Hello World'
    let entities = [
      {
        id: 1,
        title: 'apple',
        content: '🍎'
      },
      {
        id: 2,
        title: 'watermelon',
        content: '🍉'
      },
      {
        id: 3,
        title: 'oragen',
        content: '🍊'
      }
    ]
    return view.render('posts.index', {
      pageTitle,
      entities
    })
  }
}

module.exports = PostController
