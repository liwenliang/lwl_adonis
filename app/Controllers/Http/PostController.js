'use strict'

class PostController {
  // 默认的get请求会到这里
  index () {
    return `List of posts in controller.`
  }

  // 默认的post请求会到这里
  store () {
    return `Post has been created.`
  }

  // 查询单个资源走这里
  show ({params}) {
    return `You're watching post ${params.id}`
  }

  // 更新资源走这里
  update ({params}) {
    return `Post ${params.id} has been updated.`
  }

  // 删除资源走这里
  destroy ({params}) {
    return `Post ${params.id} has been removed.`
  }

  // 创建资源
  create () {
    return `Create post.`
  }

  // 编辑资源
  edit ({params}) {
    return `Editing post ${params.id}.`
  }
}

module.exports = PostController
