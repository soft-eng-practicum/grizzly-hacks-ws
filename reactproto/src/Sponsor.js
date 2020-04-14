import React, { Component } from 'react'
import {
  Header,
  Segment,
} from 'semantic-ui-react'

const sponsor= () => (
    <Segment inverted >
 <Segment inverted style={{ padding: '5em 0em', margin: '-29px' }}vertical id="sponsors">
              {/* Header text */}
              <Header style={{marginTop: 100
    }}size='huge'>
               Sponsors
              </Header>
              <br/>
              <br/>
              <div>
                <a target="_blank" href="https://ggc.edu/">
                  <img src="sponsor.png" />
                  </a>
              </div>
              <br/>
              <br/>
              <div>
                <a taget="_blank" href="https://careers.mcdonalds.com/main/us/corporate/career-trackshttps://www.mcdonalds.com/us/en-us.html">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/410px-McDonald%27s_Golden_Arches.svg.png" />
                </a>
              </div>  
      </Segment> 
  </Segment>
)

export default sponsor