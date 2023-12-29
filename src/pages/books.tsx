import * as React from 'react'
import Layout from '../components/layout'
import {
    index_container
  } from './index.module.css'
  

const BooksPage = () => {
    return (
        <div>
            <Layout pageTitle='Books'>

            </Layout>
            <ol className={index_container}>
            
            <li>
                books
            </li>
            <li>
                books
            </li>
            <li>
                books
            </li>
        </ol>
        </div>
        
    )
}

export const Head = () => <title>Books</title>

export default BooksPage