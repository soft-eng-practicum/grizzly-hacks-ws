import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

/**
 * homePage is a React Element called by App.js
 * Centers Grizzly Hacks Text on Home page. Creates a parameter to format properly on mobile devices.
 * Fade are parents to the images and text on this page.
 * Fade is responsible for "Fade/in" animations
 */
const homePage = ({}) => (
  <Segment
    inverted
    textAlign="center"
    style={{
      padding: "1 em 0em",
      margin: "-1px",
    }}
  >
    <Container text id="home">
      <div id="col-2" class="zoom">
        <Fade id="grizzly-img-container">
          <a target="_blank" href="https://discord.gg/m8rKscc">
            <img
              id="grizzly-image"
              src="https://cdn.discordapp.com/attachments/644576730597818379/696143036023046245/GrizzlyHacksLogo.png"
            />
          </a>
        </Fade>
      </div>

      <Fade bottom>
        {/* Grizzly Hacks 2020 Text */}
        <Header
          id="home-header-text"
          as="h1"
          content="Grizzly Hacks 2020"
          inverted
        />
        {/* Register Now! */}
        <Header
          id="home-registernow-text"
          as="h2"
          content="Register now!"
          inverted
        />
        {/* Responsible for the register button color and apperance  */}
        <a
          id="register-button"
          target="_blank"
          href="https://forms.gle/Ek1cGCQL5kVPo3dH8"
        >
          <Button inverted color="#00704a">
            Register
            <Icon name="right arrow" />
          </Button>
        </a>
      </Fade>
    </Container>
  </Segment>
);

export default homePage;
