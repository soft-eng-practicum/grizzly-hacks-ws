import React, { Component } from 'react'
import './App.css';
import {
  Header,
  Icon,
  Message,
  Segment,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
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
      textAlign='center'
      style={{ 
        padding: '1 em 0em',
      }}
      vertical id="faq">
  
  {/* This is the header for FAQ */}
  <Fade top>
    <Header 
    // Styling for FAQ
    style={{
      color: 'white',
      marginTop: 80,
      marginBottom: 10
    }}
    size='huge'>FREQUENTLY ASKED QUESTIONS
    </Header>
  </Fade>
  {/* Ending of heading for FAQ */}
  <Fade>
  <Message style={{
    color: 'white',
    fontSize: 18,
    width: 1000
  }} compact color = 'black'>
  
  {/* Beginning of FAQ Section */}
  
  {/* FIRST FAQ QUESTION 
      Has icon and size of icon
  */}
     <Icon name='keyboard' size='big' />
  {/* Heading for one of the FAQ questions */}
      <Message.Header>What is a hackathon?</Message.Header>
      {/* Body text for the FAQ question */}
      
        <p>
        Nessuno può sfuggire dal destino scelto. Rimane il risultato che voi sarete distrutti. 
        L'eterna cima esiste solo per me. Puoi cantare canzoni di tristezza nel mondo senza tempo.
        </p>
    </Message>
  </Fade>
  
  {/* Stying of FAQ question */}
  <Fade>
    <Message style={{
    color: 'white',
    fontSize: 18,
    width: 1000
  }} compact color = 'black'>
    {/* ENDING OF FIRST FAQ QUESTION */}
  
  {/* BEGINNING OF SECOND FAQ QUESTION
  
  Has icon and size of icon
  */}
  <Icon name='industry' size='big' />
  {/* Heading for one of the FAQ questions */}
      <Message.Header>Do I need experience?</Message.Header>
        {/* Body text for the FAQ question */}
          <p>
        Nessuno può sfuggire dal destino scelto. Rimane il risultato che voi sarete distrutti. 
        L'eterna cima esiste solo per me. Puoi cantare canzoni di tristezza nel mondo senza tempo.
         </p>
    </Message>
  </Fade>
  {/* Stying of FAQ question */}
  <Fade> 
    <Message style={{
    color: 'white',
    fontSize: 18,
    width: 1000
  }} compact color = 'black'>
    {/* ENDING OF SECOND FAQ QUESTION */}
    
  
    {/* THIRD FAQ QUESTION
    Has Icon and icon size
    */}
    <Icon name='money' size='big' />
    {/* Header text  */}
      <Message.Header>Does it cost anything?</Message.Header>
      {/* FAQ QUESTION TEXT */}
        <p>
        Nessuno può sfuggire dal destino scelto. Rimane il risultato che voi sarete distrutti.
        L'eterna cima esiste solo per me. Puoi cantare canzoni di tristezza nel mondo senza tempo.
        </p>
    </Message>
    </Fade>
  
  
  {/* faq question styling  */}
  <Fade>
    <Message style={{
    color: 'white',
    fontSize: 18,
    width: 1000
  }} compact color = 'black'>
  
    {/* END OF THIRD QUESTION */}
  
  {/* BEGINNING OF FOURTH QUESTION
  
  Icon and size
  */}
    <Icon name='home' size='big' />
    {/* Header text */}
      <Message.Header>Where will I stay?</Message.Header>
      {/* FAQ text  */}
        <p>
        Nessuno può sfuggire dal destino scelto. Rimane il risultato che voi sarete distrutti.
        L'eterna cima esiste solo per me. Puoi cantare canzoni di tristezza nel mondo senza tempo.
        Nessuno può sfuggire dal destino scelto. Rimane il risultato che voi sarete distrutti.
          L'eterna cima esiste solo per me. Puoi cantare canzoni di tristezza nel mondo senza tempo.
        </p>
      
    </Message>
    </Fade>
  
  {/* FAQ STYING */}
  <Fade>
    <Message style={{
    color: 'white',
    fontSize: 18,
    width: 1000
  }} compact color = 'black'>
  
  
    {/* END OF FOURTH FAQ QUESTION */}
    
    {/* BEGINNING OF FITH FAQ QUESTION */}
     <Icon name='food' size='big' />
     {/* Header text */}
     <Message.Header >Is food provided?</Message.Header>
     {/* Body text */}
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
      </p>
    </Message>
    </Fade>
  
  {/* END OF FITH FAQ QUESTION */}
  
  {/* BEGINNING SIXTH FAQ QUESTION */}
  {/* FAQ STYING */}
  <Fade>
  <Message style={{
    color: 'white',
    fontSize: 18,
    width: 1000
  }} compact color = 'black'>
    
  <Icon name='question circle outline' size='big' />
  {/* Header text  */}
      <Message.Header>I am not in IT. Can I still go?</Message.Header>
      {/* Body text */}
      <p>
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
      </p> 
    </Message>
    </Fade>
  
   </Segment>
)
  
  export default HomepageLayout;