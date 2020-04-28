import React, { Component } from "react";
import "./App.css";
import { Header, Icon, Message, Segment } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
/**
 * HomepageLayout is a React element called by App.js.
 * First segment centers text and identifies the page as "faq" for linking purposes.
 * Fade top is a parent to Header and enables the text to appear from the top of the screen.
 * Fade is parented through out the rest of message sections to have the icons and text fade/in seamlessly
 * This page is styled with css within the .js file
 */
const HomepageLayout = () => (
  <Segment
    inverted
    textAlign="center"
    style={{
      padding: "1 em 0em",
    }}
    vertical
    id="faq"
  >
    {/* This is the header for FAQ */}
    <Fade top>
      <Header
        // Styling for FAQ
        style={{
          color: "white",
          marginTop: 80,
          marginBottom: 10,
        }}
        size="huge"
      >
        FREQUENTLY ASKED QUESTIONS
      </Header>
    </Fade>
    {/* Ending of heading for FAQ */}

    <Fade>
      <Message
        style={{
          color: "white",
          fontSize: 18,
          width: 1000,
        }}
        compact
        color="black"
      >
        {/* Beginning of FAQ Section */}

        {/* FIRST FAQ QUESTION 
          Has icon and size of icon
      */}
        <Icon name="keyboard" size="big" />
        {/* Heading for one of the FAQ questions */}
        <Message.Header>What is a hackathon?</Message.Header>

        {/* Body text for the FAQ question */}
        <p>
          A hackathon is a event held to test college-level devs with different
          skill sets to test their mettle. Whether you are Digital Media,
          Computer, Science, a Software Engineer, or a business major looking to
          pad his/her portfolio there is a place for you. At these events you
          are encouraged to join teams to complete challenges created by The
          Grizzly Hacks team and our wonderful sponsors.
        </p>
      </Message>
    </Fade>

    {/* Styling of FAQ question */}
    <Fade>
      <Message
        style={{
          color: "white",
          fontSize: 18,
          width: 1000,
        }}
        compact
        color="black"
      >
        {/* ENDING OF FIRST FAQ QUESTION */}

        {/* BEGINNING OF SECOND FAQ QUESTION
  
  Has icon and size of icon
  */}
        <Icon name="industry" size="big" />
        {/* Heading for one of the FAQ questions */}
        <Message.Header>Do I need experience?</Message.Header>
        {/* Body text for the FAQ question */}
        <p>
          The answer is NO!!! Whether you are a coding master or a individual
          who doesn't even know what a for-loop is you are still welcome to
          join. The Grizzly Hacks team will be providing plenty of workshops to
          help others learn new skills or to even hone an experienced
          practioners current skill-set. Also, you can learn a thing or two from
          our incredible mentors or even your own teammates!
        </p>
      </Message>
    </Fade>
    {/* Stying of FAQ question */}
    <Fade>
      <Message
        style={{
          color: "white",
          fontSize: 18,
          width: 1000,
        }}
        compact
        color="black"
      >
        {/* ENDING OF SECOND FAQ QUESTION */}

        {/* THIRD FAQ QUESTION
    Has Icon and icon size
    */}
        <Icon name="money" size="big" />
        {/* Header text  */}
        <Message.Header>Does it cost anything?</Message.Header>
        {/* FAQ QUESTION TEXT */}
        <p>
          This experience is on the house! as long as you are a fellow college
          student or a recent alumni you are welcome to join the hacking fun,
          free of charge.
        </p>
      </Message>
    </Fade>

    {/* faq question styling  */}
    <Fade>
      <Message
        style={{
          color: "white",
          fontSize: 18,
          width: 1000,
        }}
        compact
        color="black"
      >
        {/* END OF THIRD QUESTION */}

        {/* BEGINNING OF FOURTH QUESTION
  
  Icon and size
  */}
        <Icon name="home" size="big" />
        {/* Header text */}
        <Message.Header>Where will I stay?</Message.Header>
        {/* FAQ text  */}
        <p>
          Bring a sleeping bag, portable futon, a pillow, or just a simple
          blanket because you are free to sleep at the venue. There will be
          designated sleeping areas where you are free to sleep for the night
          (or code of course). You are also free to leave campus to enjoy the
          comfort of your own home or hotel (but where is the fun in that?).
        </p>
      </Message>
    </Fade>

    {/* FAQ STYING */}
    <Fade>
      <Message
        style={{
          color: "white",
          fontSize: 18,
          width: 1000,
        }}
        compact
        color="black"
      >
        {/* END OF FOURTH FAQ QUESTION */}

        {/* BEGINNING OF FITH FAQ QUESTION */}
        <Icon name="food" size="big" />
        {/* Header text */}
        <Message.Header>Is food provided?</Message.Header>
        {/* Body text */}
        <p>Food is FREE and will be provided to all hackers.</p>
      </Message>
    </Fade>

    {/* END OF FITH FAQ QUESTION */}

    {/* BEGINNING SIXTH FAQ QUESTION */}
    {/* FAQ STYING */}
    <Fade>
      <Message
        style={{
          color: "white",
          fontSize: 18,
          width: 1000,
        }}
        compact
        color="black"
      >
        <Icon name="question circle outline" size="big" />
        {/* Header text  */}
        <Message.Header>I am not in IT. Can I still go?</Message.Header>
        {/* Body text */}
        <p>
          Even if you aren't in IT please still join the event. A hackathon is a
          learning experience and grreat place to network. You will be able to
          talk face-to-face with our wonderful sponsor at thier vistor tables.
          Make connections with other hackers. And enjoy free food! Grizzly
          Hacks mission isn't to isolate but to encourage others to seek a
          career in technology by showing everyone how fun hacking can be!
        </p>
      </Message>
    </Fade>
  </Segment>
);

export default HomepageLayout;
