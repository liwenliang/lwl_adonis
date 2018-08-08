'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('/posts', ({response}) => {
//   return `List of posts`
// })

Route.get('/list-of-posts', ({response}) => {
  // response.redirect('/posts')          // 重定向地址
  // response.redirect('/posts', true)    // 重定向带着查询参数
  // response.redirect('/posts', true, 301)  // 重定向带着查询参数 code码是301
  response.route('list-of-posts')
})

Route.get('/list-of-food-posts', ({response}) => {
  response.route('list-of-posts', {category: 'food'})
})

Route.get('/posts/:category?', ({params}) => {
  return `List of ${params.category || 'default'} posts `
}).as('list-of-posts')
