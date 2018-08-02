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

Route
  .resource('/posts', 'PostController')
  .except(['index'])
// .only(['index', 'show'])
// .apiOnly()

// 这种写法是很优雅的，如果自己模板能够输出链接，最好不过用这种形式了
Route.get('/users', ({request}) => {
  switch (request.format()) {
    case 'json':
      return [
        {name: 'zhangsan'},
        {name: 'lisi'}
      ]
    default:
      return `
        - zhangsan
        - lisi
      `
  }
}).formats(['json', 'html'], true)
