import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Fade';


// const getWidth = () => {
//     const isSSR = typeof window === 'undefined'
  
//     return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
//   }

  const homePage = ({ mobile }) => (
    <Segment 
    inverted
    textAlign='center'
    style={{ 
      padding: '1 em 0em',
      margin: '-1px',    
    }}>


    <Container text id="home">
      <div  class="img-container" style={{
        marginTop: 60,
        marginBottom: 10,
        padding: 0
        
      }}>
        <Flip>
          <a target="_blank" href="https://discord.gg/m8rKscc">
            <img height= {mobile ? "200" :'400'} width = {mobile ? "200" :'400'}  src="https://cdn.discordapp.com/attachments/644576730597818379/696143036023046245/GrizzlyHacksLogo.png" />
          </a>
        </Flip>
      </div>
      <Fade bottom>
        <Header
          as='h1'
          content='Grizzly Hacks 2020'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4.7em',
            fontWeight: 'normal',
            marginBottom: 10,
            marginTop: mobile ? -25 : -50,
          padding: 0
          }}
        />
        <Header
          as='h2'
          content='Register now!'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0em' : '1.5em',
            marginBottom:15,
              
          }}
        />
      {/* Responsible for the register button color and apperance  */}
      <a target="_blank" href ="https://zidrees560.typeform.com/to/MalPXV">
          <Button inverted color="#00704a">
              Register
          <Icon name='right arrow' />
          </Button>
        </a>
      </Fade>
    </Container>

        



    </Segment>


        


  )
  
  // homePage.propTypes = {
  //   mobile: PropTypes.bool,
  // }
  
  /* 
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, 
     however, it can be implemented easily.
   */
  // class DesktopContainer extends Component {
  //   state = {}
  
  //   hideFixedMenu = () => this.setState({ fixed: false })
  //   showFixedMenu = () => this.setState({ fixed: true })
  
  //   render() {
  //     const { children } = this.props
  //     const { fixed } = this.state
  
  //     return (
  //       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
  //         <Visibility
  //           once={false}
  //           onBottomPassed={this.showFixedMenu}
  //           onBottomPassedReverse={this.hideFixedMenu}
  //         >
  //           <Segment
  //             inverted
  //             textAlign='center'
  //             style={{ minHeight: 700, padding: '1em 0em' }}
  //             vertical
  //           >
  //             <Menu
  //               fixed={fixed ? 'top' : null}
  //               inverted={!fixed}
  //               pointing={!fixed}
  //               secondary={!fixed}
  //               size='large'
  //             >
  //               <Container>
  //                 <Menu.Item as='a'><a href="#home">Home</a></Menu.Item>
  //                 <Menu.Item as='a'><a href="#about">About</a></Menu.Item>
  //                 <Menu.Item as='a'><a href="#sponsors">Sponsors</a></Menu.Item>
  //                 <Menu.Item as='a'><a href="#faq">FAQ</a></Menu.Item>
  //                 <Menu.Item as='a'><a href="#contact">Contact</a></Menu.Item>
  //                 <Menu.Item as='a'><a href="#schedule">Schedule</a></Menu.Item>
  //                 <Menu.Item position='right'>
  //                   <Button as='a' inverted={!fixed}>
  //                     Log in
  //                   </Button>
  //                   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
  //                     Sign Up
  //                   </Button>
  //                 </Menu.Item>
  //               </Container>
  //             </Menu>
  //             <homePage/>
  //           </Segment>
  //         </Visibility>
  
  //         {children}
  //       </Responsive>
  //     )
  //   }
  // }
  
  // DesktopContainer.propTypes = {
  //   children: PropTypes.node,
  // }
  
  // class MobileContainer extends Component {
  //   state = {}
  
  //   handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
  //   handleToggle = () => this.setState({ sidebarOpened: true })
  
  //   render() {
  //     const { children } = this.props
  //     const { sidebarOpened } = this.state
  
  //     return (
  //       <Responsive
  //         as={Sidebar.Pushable}
  //         getWidth={getWidth}
  //         maxWidth={Responsive.onlyMobile.maxWidth}
  //       >
  //         <Sidebar
  //           as={Menu}
  //           animation='push'
  //           inverted
  //           onHide={this.handleSidebarHide}
  //           vertical
  //           visible={sidebarOpened}
  //         >
  //           <Menu.Item as='a' active>
  //             Home
  //           </Menu.Item>
           
  //           <Menu.Item as='a'>About</Menu.Item>
  //           <Menu.Item as='a'>Sponsors</Menu.Item>
  //           <Menu.Item as='a'>FAQ</Menu.Item>
  //           <Menu.Item as='a'>Log in</Menu.Item>
  //           <Menu.Item as='a'>Sign Up</Menu.Item>
  //         </Sidebar>
  
  //         <Sidebar.Pusher dimmed={sidebarOpened}>
  //           <Segment
  //             inverted
  //             textAlign='center'
  //             style={{ minHeight: 350, padding: '1em 0em' }}
  //             vertical
  //           >
  //             <Container>
  //               <Menu inverted pointing secondary size='large'>
  //                 <Menu.Item onClick={this.handleToggle}>
  //                   <Icon name='sidebar' />
  //                 </Menu.Item>
  //                 <Menu.Item position='right'>
  //                   <Button as='a' inverted>
  //                     Log in
  //                   </Button>
  //                   <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
  //                     Sign Up
  //                   </Button>
  //                 </Menu.Item>
  //               </Menu>
  //             </Container>
  //             <homePage mobile />
  //           </Segment>
  
  //           {children}
  //         </Sidebar.Pusher>
  //       </Responsive>
  //     )
  //   }
  // }
  
  // // Need this to display on mobile
  // MobileContainer.propTypes = {
  //   children: PropTypes.node,
  // }
  
  // const ResponsiveContainer = ({ children }) => (
  //   <div>
  //     <DesktopContainer>{children}</DesktopContainer>
  //     <MobileContainer>{children}</MobileContainer>
  //   </div>
  // )
  
  // ResponsiveContainer.propTypes = {
  //   children: PropTypes.node,
  // }
  
  
  // class App extends Component {
  //   render() {
  //     return (
  //       <contact />
  //     );
  //   }
  // }
 
   export default homePage