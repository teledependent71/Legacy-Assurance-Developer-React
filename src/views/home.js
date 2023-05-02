import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Assurance Developer</title>
        <meta property="og:title" content="Legacy Assurance Developer" />
      </Helmet>
    </div>
  )
}

export default Home
