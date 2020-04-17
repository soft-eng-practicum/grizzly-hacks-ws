import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

 /**
  * homePage is a React Element called by App.js
  * Centers Grizzly Hacks Text on Home page. Creates a parameter to format properly on mobile devices.
  * Fade are parents to the images and text on this page.
  * Fade is responsible for "Fade/in" animations
  * @param {*} mobile 
  */
  const homePage = ({ mobile }) => (
    <Segment 
    inverted
    textAlign='center'
    style={{ 
      padding: '1 em 0em',
      margin: '-1px',    
    }}>


    <Container text id="home">
      <div  class="img-container" style={{
        marginTop: 4.5,
        marginBottom: 1,
        padding: 0
        
      }}>
        
        <Fade>
          <a target="_blank" href="https://discord.gg/m8rKscc">
            <img height= {mobile ? "200" :'400'} width = {mobile ? "200" :'400'}  src="https://cdn.discordapp.com/attachments/644576730597818379/696143036023046245/GrizzlyHacksLogo.png" />
          </a>
        </Fade>
      </div>
      <Fade bottom>
        <Header
          as='h1'
          content='Grizzly Hacks 2020'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4.7em',
            fontWeight: 'normal',
            marginBottom: 0.5,
            marginTop: mobile ? -25 : -50,
          padding: 0
          }}
        />
        <Header
          as='h2'
          content='Register now!'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0em' : '1.5em',
            marginBottom:15,
              
          }}
        />
      {/* Responsible for the register button color and apperance  */}
      <a target="_blank" href ="https://zidrees560.typeform.com/to/MalPXV">
          <Button inverted color="#00704a">
              Register
          <Icon name='right arrow' />
          </Button>
        </a>
      </Fade>
    </Container>

        



    </Segment>
  )
 
   export default homePage