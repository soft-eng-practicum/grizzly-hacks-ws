import React, { Component } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

/**
 * The aboutPage is a React Element called by App.js.
 * Page is seperated with segements and grids. Header contains title information and p (paragraphs) contains general "About us" information.
 * Fade is the parent to the Headers and paragraphs so text appears from the left and the right
 */
const aboutPage = () => (
  <Segment inverted>
    <Segment
      id="about"
      inverted
      style={{ padding: "9em 0em", margin: "-29px" }}
      vertical
    >
      <Grid container centered stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            {/* Header text */}
            <Fade left>
              <Header inverted as="h3" style={{ fontSize: "2em" }}>
                About us
              </Header>
            </Fade>
            {/* Dummy text */}
            <Fade right>
              <p style={{ fontSize: "1.33em" }}>
                Here are the faces of the Grizzly Hacks Cabinet. These are the
                individuals who seek to bring hack-a-thons to Georgia Gwinnett
                College!
              </p>
              <br />
              <h3>Vi "Jimmy" Nguyen the President</h3>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vinguyen-ggc/"
              >
                <img
                  src="President_Vi_Nguyen.png"
                  id="vi-image"
                  class="zoom2"
                />
              </a>
              <br />
              <br />
              <br />
              <h3>Phillip Chazares the Secretary</h3>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/phillip-chazares/"
              >
                <img
                  src="Secretary_Phillip_Chazares.jpg"
                  id="vi-image"
                  class="zoom2"
                />
              </a>
              <br />
            </Fade>

            <br />
            <br />
            <br />
            {/* Header text */}
            <Fade left>
              <Header inverted as="h3" style={{ fontSize: "2em" }}>
                More info
              </Header>
            </Fade>
            {/* Dummy Text */}
            <Fade right>
              <p style={{ fontSize: "1.33em" }}>
                If you are not looking to become a hacker and instead a sponsor
                please contact our Grizzly Hacks cabinet for more details. Thank
                you!
              </p>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Segment>
);

export default aboutPage;
