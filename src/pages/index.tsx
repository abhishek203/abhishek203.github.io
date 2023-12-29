import * as React from 'react'
import resume from "../../public/static/Resume_E_Abhishek.pdf"
import Layout from '../components/layout'
import Social from '../components/social'
import {
  body
} from '../styles/body.module.css'

const IndexPage = () => {
  return (
    <div className={body}>
      <Layout pageTitle="E Abhishek" />
      <div>
        Hi,
        <br /><br />
        I am currently working as a test automation engineer with the battery team at Enphase Energy. I completed my studies at IIT Bombay in 2023.
        <br /><br />
        Previously I was involved in the Modernization of Land Records project with the Government of Maharashtra and had a role as a Software Development Engineer intern at Warner Bros Discovery.
        <br /><br />
        <a href={resume}> Resume </a>
      </div>
      <Social />
    </div>

  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage