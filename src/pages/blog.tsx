import * as React from 'react'
import Layout from '../components/layout'
import Social from '../components/social'

import {
    body
} from '../styles/body.module.css'
import {
    book
} from '../styles/books.module.css'
interface blogProps {
    blogTitle: string;
    blogDate: Date;
    blogDesc: string;
}
const Blog = ({blogTitle, blogDesc}) => {
    return (
        <div>
            <h2>{blogTitle}</h2>
            <p>{blogDesc}</p>
        </div>
    )
}
const BlogPage = () => {
    return (
        <div className={body}>
            <Layout pageTitle="Blog"/>
            <Blog blogTitle="My first blog" blogDesc="I have to start..."/>
            <Social/>
        </div>
    )
}


export const Head = () => <title>Blog</title>

export default BlogPage