import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const pageFooter= () => (
    <Segment inverted >
 <Segment inverted vertical style={{     
     padding: '9em 0em',
     margin: '-29px'

      }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                {/* Header text */}
                <Header inverted as='h4' content='Contact Us' id="contact"/>
                <div>
                  {/* Has icons for the contact info in the footer */}
                <Icon link name ='discord' size='large'  />
                <Icon link name='github' size='large'  />
                <Icon link name='instagram' size='large' />
                <Icon link name='twitter' size='large' />
                <Icon link name='slack' size='large' />
              </div>
              </Grid.Column>
              <Grid.Column width={3}>
                {/* Footer text could be changed */}
                <p>
                  Made with 💚 by Exodia 
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
  </Segment>
)

export default pageFooter



