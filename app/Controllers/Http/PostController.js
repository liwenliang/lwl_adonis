'use strict'
const Database = use('Database')
const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {
    const posts = await Post.all()
    return view.render('post.index', { posts: posts.toJSON() })
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
    // const postID = await Database.insert(newPost).into('posts')
    const post = await Post.create(newPost)
    response.redirect(`/posts/${ post.id }`)
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
    return view.render('post.show', { post })
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   */
  async edit ({ params, request, response, view }) {
    const post = await Database.from('posts').where('id', params.id).first()
    return view.render('post.edit', { post } )
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
    const updatedPost = request.only(['title', 'content'])
    await Database
      .table('posts')
      .where('id', params.id)
      .update(updatedPost)
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, request, response }) {
    await Database.table('posts').where('id', params.id).delete()

    return 'success'
  }
}

module.exports = PostController
