import * as React from 'react'
import Layout from '../components/layout'
import {
  index_container
} from './index.module.css'

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="E Abhishek">
      </Layout>
      <div className={index_container}>
        Hi,
        <br /><br />
        I completed my studies at IIT Bombay in 2023 and currently hold a position as a test automation engineer within the battery team at Enphase Energy.
      </div>
    </div>
    
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage