import React, { Component } from 'react'
import {
  Header,
  Segment,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
/**
 * sponsor is a React element that is called by App.js
 * Creates a page that contains images with links to the sponsors website
 * Header text is parented by <Fade top> to enable animation from the top of the page
 * Images are parented by <Fade> so they gradual appear on the page.
 */
const sponsor= () => (
    <Segment inverted >
        <Segment inverted style={{ padding: '2em 0em', margin: '-29px' }}vertical id="sponsors">
              {/* Header text */}
              <Fade top>
                <Header style={{color: 'white', marginTop: 0
                    }}size='huge'>
                    Sponsors
                </Header>
              </Fade>
              
              <br/>
              <br/>
              <div>
                <Fade>
                  <a target="_blank" href="https://ggc.edu/">
                  <img src="sponsor.png" />
                  </a>
                </Fade>
              </div>
              <br/>
              <br/>
              <div>
                <Fade>
                  <a target="_blank" href="https://careers.mcdonalds.com/main/us/corporate/career-trackshttps://www.mcdonalds.com/us/en-us.html">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/410px-McDonald%27s_Golden_Arches.svg.png" />
                  </a>
                </Fade>
              </div>  
      </Segment> 
  </Segment>
)

export default sponsor