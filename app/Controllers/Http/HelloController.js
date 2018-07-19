'use strict'

class HelloController {
  render({request, view}) {
    let name = request.input('name')
    return view.render('hello', {name})
  }
}

module.exports = HelloController
