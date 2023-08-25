import React from 'react'

import { Button, Container, Row } from "react-bootstrap";


import './LandingStyles.css';

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Maker</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>

           <div className="buttonContainer">
             <Button variant="dark" size='lg' className='landingbutton'>Login</Button>

            <Button variant="outline-dark"size='lg' className='landingbutton'>SignUp</Button>
              
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
