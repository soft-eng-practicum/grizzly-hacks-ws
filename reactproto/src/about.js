import React, { Component } from 'react'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'


const aboutPage= () => (
    <Segment inverted >
 

 <Segment inverted style={{ padding: '8em 0em', margin: '-29px'  }} vertical id="about">
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
  
            
              {/* Header text */}
              <Header inverted as='h3' style={{ fontSize: '2em' }}>
               About us
              </Header>
              {/* Dummy text */}
              <p style={{ fontSize: '1.33em' }}>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
  
  
              {/* Header text */}
              <Header inverted as='h3' style={{ fontSize: '2em' }}>
                More info
              </Header>
              {/* Dummy Text */}
              <p style={{ fontSize: '1.33em' }}>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
        </Segment>
  

  </Segment>
)

export default aboutPage



