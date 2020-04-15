import React, { Component } from 'react'
import {
  Header,
  Segment,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

const sponsor= () => (
    <Segment inverted >
 <Segment inverted style={{ padding: '5em 0em', margin: '-29px' }}vertical id="sponsors">
              {/* Header text */}
              <Fade top>
                <Header style={{color: 'white', marginTop: 100
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
                  <a taget="_blank" href="https://careers.mcdonalds.com/main/us/corporate/career-trackshttps://www.mcdonalds.com/us/en-us.html">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/410px-McDonald%27s_Golden_Arches.svg.png" />
                  </a>
                </Fade>
              </div>  
      </Segment> 
  </Segment>
)

export default sponsor