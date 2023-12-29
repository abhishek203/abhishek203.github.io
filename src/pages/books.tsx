import * as React from 'react'
import Layout from '../components/layout'
import Social from '../components/social'

import {
    body
} from '../styles/body.module.css'
import {
    book
} from '../styles/books.module.css'


interface bookProps {
    bookTitle: string;
    Author: string;
}

const Book: React.FC<bookProps> = ({ bookTitle, Author }) => {
    return (
        <li className={book}>
            <strong>  {bookTitle}</strong>; <i> {Author}</i>
        </li>
    )
}

const BooksPage = () => {
    return (
        <div className={body}>
            <Layout pageTitle='Books' />
            <ol >
                <Book bookTitle='Chip War: The Fight for the World&apos;s Most Critical Technology' Author='Chris Miller' />
                <Book bookTitle='Only the Paranoid Survive: How to Exploit the Crisis Points that Challenge Every Company and Career' Author='Andrew Grove' />
                <Book bookTitle='Animal Farm' Author='George Orwell' />
                <Book bookTitle='1984' Author='George Orwell' />
                <Book bookTitle='Down and Out in Paris and London' Author='George Orwell' />
                <Book bookTitle='No Filter: The Story of Instagram' Author='Sarah Frier' />
                <Book bookTitle='The Diary of a Young Girl' Author='Anne Frank' />
                <Book bookTitle='The Story of My Experiments with Truth' Author='Mahatma Gandhi' />
            </ol>
            <Social />
        </div>

    )
}

export const Head = () => <title>Books</title>

export default BooksPage