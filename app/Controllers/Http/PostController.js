'use strict'

class PostController {
    async index ({view}) {
        const posts = [
            {post_title: 'Post One', post_body: 'This is post One'},
            {post_title: 'Post Two', post_body: 'This is post Two'},
            {post_title: 'Post Three', post_body: 'This is post Three'},
            {post_title: 'Post Four', post_body: 'This is post Four'}
        ]
        return view.render('post/index', {
            title: 'Learning-Blog',
            posts: posts
        })
        // return 'Welcome to post controllers index'
    }
}

module.exports = PostController
