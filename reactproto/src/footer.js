import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
/**
 * pageFooter is a React element that is called by App.js
 * This element constructs the footer of all the web pages
 * The icons will link to the Grizzly Hacks social media accounts and git hub.
 * Header and Icon are parented by <Fade> so that the gradually appear on the page as the user scrolls down.
 * Developer can edit the link by changing the href for the icon.
 */
const pageFooter= () => (
  <Segment inverted >
    <Segment  inverted vertical>
      <Container class="footerContent">
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
               {/* Header text */}
               <Fade>
                <Header inverted as='h4' content='Contact Us' id="contact"/>
                  <div>
                    {/* Has icons for the contact info in the footer */}
                    <Icon link name ='discord' size='large' href="https://discord.gg/m8rKscc"/>
                    <Icon link name='github' size='large' href="https://github.com/soft-eng-practicum/grizzly-hacks-ws"/>
                    <Icon link name='instagram' size='large' />
                    <Icon link name='twitter' size='large' />
                    <Icon link name='slack' size='large' />
                  </div>
               </Fade>
            </Grid.Column>
              <Grid.Column width={3}>
                  {/* Footer text could be changed */}
                  <Fade>
                    <p>
                      Made with 💚 by Exodia 
                    </p>
                </Fade>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </Segment>
)

export default pageFooter



