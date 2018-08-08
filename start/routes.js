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

// 解构context对象的request对象
Route.get('/posts', ({request}) => request.get())

// Route.post('/posts', ({request}) => request.post())
// Route.post('/posts', ({request}) => request.all())
// Route.post('/posts', ({request}) => request.only('age'))
// Route.post('/posts', ({request}) => request.except('age'))
Route.post('/posts', ({request}) => request.input('status', 'reading'))
