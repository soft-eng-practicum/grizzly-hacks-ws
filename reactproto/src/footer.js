import React, { Component } from "react";
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
/**
 * pageFooter is a React element that is called by App.js
 * This element constructs the footer of all the web pages
 * The icons will link to the Grizzly Hacks social media accounts and git hub.
 * Header and Icon are parented by <Fade> so that the gradually appear on the page as the user scrolls down.
 * Developer can edit the link by changing the href in <a> for the icon.
 */
const pageFooter = () => (
  <Segment id="footerContent" inverted>
    <Container id="footerContainer">
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            {/* Header text */}
            <Fade>
              <Header inverted as="h4" content="Contact Us" id="contact" />
              <div>
                {/* Has icons for the contact info in the footer. Links to the Grizzly Hacks social media */}
                <a target="_blank" href="https://discord.gg/m8rKscc">
                  <Icon link name="discord" size="large" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/soft-eng-practicum/grizzly-hacks-ws"
                >
                  <Icon link name="github" size="large" />
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                  <Icon link name="instagram" size="large" />
                </a>
                <a target="blank" href="https://twitter.com/explore">
                  <Icon link name="twitter" size="large" />
                </a>
                <a target="_blank" href="https://slack.com/">
                  <Icon link name="slack" size="large" />
                </a>
                {/* <a target ="_blank" href="./Users/josiah/OneDrive/Documents/SoftDevII/grizzly-hacks-ws/reactproto/docs/index.html"><Icon link name= 'info circle' size='large' /></a> */}
              </div>
            </Fade>
          </Grid.Column>
          <Grid.Column width={3}>
            {/* Footer text could be changed */}
            <Fade>
              <p>Made with 💚 by Exodia</p>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default pageFooter;
