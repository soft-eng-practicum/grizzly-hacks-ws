import React, { Component } from 'react'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

/**
 * The aboutPage is a React Element called by App.js. 
 * Page is seperated with segements and grids. Header contains title information and p (paragraphs) contains general "About us" information.
 * Fade is the parent to the Headers and paragraphs so text appears from the left and the right
 */
const aboutPage= () => (

  <Segment inverted>
    
    <Segment id="about" inverted style=
              {{ padding: '9em 0em', 
                margin: '-29px'  }} 
                vertical >
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
                <Fade left>
                  <Header inverted as='h3' style={{ fontSize: '2em' }}>
                    More info
                  </Header>
                </Fade>
                {/* Dummy Text */}
                <Fade right>
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



