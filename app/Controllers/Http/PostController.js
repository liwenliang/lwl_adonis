'use strict'
const Database = use('Database')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   */
  async create ({ request, response, view }) {
    return view.render('post.create')
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ request, response }) {
    const newPost = request.only(['title', 'content'])
    const postID = await Database.insert(newPost).into('posts')
    response.redirect(`/posts/${ postID[0] }`)
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params, request, response, view }) {
    const post = await Database
      .from('posts')
      .where('id', params.id)
      .first()
    console.log('----------------')
    console.log(post)
    console.log('----------------')
    return view.render('post.show', { post })
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
