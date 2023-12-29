import * as React from 'react'
import Layout from '../components/layout'
import Social from '../components/social'

import {
    body
} from '../styles/body.module.css'
import {
    book
} from '../styles/books.module.css'

const BlogPage = () => {
    return (
        <div className={body}>
            <Layout pageTitle="Blog"/>
            <Social/>
        </div>
    )
}


export const Head = () => <title>Blog</title>

export default BlogPage