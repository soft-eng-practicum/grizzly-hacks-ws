import React, { Component } from 'react'
import {
  Grid,
  Header,
  Image,
  Segment,
  Reveal
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';


const aboutPage= () => (
    <Segment inverted>
 

 <Segment inverted style={{ padding: '8em 0em', margin: '-29px'  }} vertical id="about">
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
  
            
              {/* Header text */}
              <Fade left>
                <Header inverted as='h3' style={{ fontSize: '2em' }}>
                About us
                </Header>
              </Fade>
              {/* Dummy text */}
              <Fade right>
                <p style={{ fontSize: '1.33em' }}>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Fade>
              
              {/* Header text */}
              <Fade right>
                <Header inverted as='h3' style={{ fontSize: '2em' }}>
                  More info
                </Header>
              </Fade>
              {/* Dummy Text */}
              <Fade left>
                <p style={{ fontSize: '1.33em' }}>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Fade>

            </Grid.Column>
          </Grid.Row>

        </Grid>

       
        </Segment>
  
  </Segment>

  
)

export default aboutPage



