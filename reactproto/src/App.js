
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './App.css';
import contact from './contact.js';
import Scrollspy from 'react-scrollspy'

// These imports are needed in order to use Semantic UI Recact
import {
  Accordion,
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Item,
  Image,
  List,
  Menu,
  Message,
  Responsive,
  Segment,
  Sidebar,
  Table,
  Visibility,
  ListItem,
} from 'semantic-ui-react'

// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for styling
 */

const HomepageHeading = ({ mobile }) => (
  <Container text id="home">
    <div class="img-container" style={{
      marginTop: 60,
    }}><a target="_blank" href="https://discord.gg/m8rKscc">
        <img height= {mobile ? "200" :'400'} width = {mobile ? "200" :'400'}  src="https://cdn.discordapp.com/attachments/644576730597818379/658752630968811530/squircle.png" />
      </a>
    </div>
    <Header
      as='h1'
      content='Grizzly Hacks 2020'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4.7em',
        fontWeight: 'normal',
        marginBottom: -20,
        marginTop: mobile ? -25 : -50,
      }}
    />
    <Header
      as='h2'
      content='Register now!'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        
      }}
    />
  {/* Responsible for the register button color and apperance  */}
  <a target="_blank" href ="https://zidrees560.typeform.com/to/MalPXV">
      <Button inverted color="#00704a">
          Register
       <Icon name='right arrow' />
      </Button>
    </a>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* 
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, 
   however, it can be implemented easily.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              {/* Responsible for showing the side bar when you go into mobile  */}
              <Container>
                <Menu.Item as='a'><a href="#home">Home</a></Menu.Item>
                <Menu.Item as='a'><a href="#about">About</a></Menu.Item>
                <Menu.Item as='a'><a href="#sponsors">Sponsors</a></Menu.Item>
                <Menu.Item as='a'><a href="#faq">FAQ</a></Menu.Item>
                <Menu.Item as='a'><a href="#contact">Contact</a></Menu.Item>
                <Menu.Item as='a'><a href="#schedule">Schedule</a></Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
      
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
         
          <Menu.Item as='a'>About</Menu.Item>
          <Menu.Item as='a'>Sponsors</Menu.Item>
          <Menu.Item as='a'>FAQ</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

// Need this to display on mobile
MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


class App extends Component {
  render() {
    return (
      <contact />
    );
  }
}

// I was experimenting with showing an image 
// Couldn't get it to show tho
const ImageExampleImage = () => (
  <img src="./logo192.png" size='large' />
)


// Majority of things seen on screen are in here like 
// schedule, FAQ, About us
const HomepageLayout = ({mobile}) => (
  
  <ResponsiveContainer >

    <Segment 
    inverted
    textAlign='center'
    style={{ 
      minHeight: 350, 
      padding: '1 em 0em',
    }}
    vertical id="faq">

{/* This is the header for FAQ */}
<Header 
// Styling for FAQ
style={{
  marginTop: 500,
  marginBottom: 10
}}
size='huge'>FREQUENTLY ASKED QUESTIONS</Header>
{/* Ending of heading for FAQ */}

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

{/* Stying of FAQ question */}
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

{/* Stying of FAQ question */}
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


{/* faq question styling  */}
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

{/* FAQ STYING */}

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

{/* END OF FITH FAQ QUESTION */}

{/* BEGINNING SIXTH FAQ QUESTION */}
{/* FAQ STYING */}

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
  {/*Sponsor section*/}
  <Segment inverted style={{ padding: '5em 0em' }}vertical id="sponsors">
            {/* Header text */}
            <Header style={{marginTop: 100
  }}size='huge'>
             Sponsors
            </Header>
            <br/>
            <br/>
            <div>
              <a target="_blank" href="https://ggc.edu/">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/ef/GGC_seal1.png" />
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

  
{/* 
<Item.Group >

    <Item >
    <section id="section-3">
      <Item.Content >
        <Item.Header as ='a'>FAQ</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
         I am words
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
      </section>
    </Item>
    

    <Item>
      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
         I am words e
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group> */}



{/* This show the header for schedule  */}
<Segment inverted style={{ padding: '1em 0em' }} vertical id="schedule">
  <Header style={{marginTop: 100
  }}size='huge'>Schedule</Header>
</Segment>

{/* BEGINNING OF FIRST TABLE FOR SCHEDULE */}

{/* This is responsible for the table where the schedule is  */}
{/* inverted is added so it appears black. If you want to learn more about tables
look at Semantic UI React  */}

  <Table celled striped inverted fixed>
    <Table.Header>
      <Table.Row>
        {/* Positioning of content*/}
        <Table.HeaderCell colSpan='3' collapsing textAlign='center'>Friday, March 9th</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

{/* First row of table  */}
    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing textAlign = 'center'>
          {/* This displays the icon for "checkboard" using Semantic UI React */}
          <Icon name='clipboard check' /> Check-In
        </Table.Cell>
        {/* Shows content in table  */}
        <Table.Cell collapsing textAlign = 'center'>Building E</Table.Cell>
        {/* Shows the time in the last column of the table  */}
        <Table.Cell collapsing textAlign='center'>
          5:00 PM
        </Table.Cell>
      </Table.Row>
      <Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
        <Table.Cell collapsing textAlign = 'center'>
          {/* Shows us the icon */}
          <Icon name='star' /> Opening Ceremony
        </Table.Cell>
        {/* Column content  */}
        <Table.Cell collapsing textAlign = 'center'>Cisco Auditoriun</Table.Cell>
        {/* Last column content */}
        <Table.Cell textAlign = 'center'>6:00 PM</Table.Cell>
      </Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
      <Table.Row>
        <Table.Cell collapsing textAlign = 'center'>
          <Icon name='bullseye' /> Workshop
        </Table.Cell>
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        <Table.Cell textAlign='center'>TBA</Table.Cell>
      </Table.Row>
      <Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}

        <Table.Cell collapsing textAlign = 'center'>
          <Icon name='bullseye' /> Workshop
        </Table.Cell>
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        <Table.Cell textAlign='center'>TBA</Table.Cell>
      </Table.Row>
      <Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
        <Table.Cell collapsing textAlign = 'center'>
          <Icon name='food' /> Dinner
        </Table.Cell>
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        <Table.Cell textAlign='center'>TBA</Table.Cell>
      </Table.Row>
      <Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
        <Table.Cell collapsing textAlign = 'center'>
          <Icon name='bullseye' /> Workshop
        </Table.Cell>
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        <Table.Cell textAlign='center'>TBA</Table.Cell>
      </Table.Row>
      <Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
        <Table.Cell collapsing textAlign = 'center'>
          <Icon name='bullseye' /> Workshop
        </Table.Cell>
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        <Table.Cell textAlign='center'>TBA</Table.Cell>
      </Table.Row>

      <Table.Row>
        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
        <Table.Cell collapsing textAlign = 'center'>
          <Icon name='bullseye' /> Workshop
        </Table.Cell>

        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>

        <Table.Cell textAlign = 'center'>TBA</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  {/* END OF FIRST TABLE FOR SCHEDULE */}

  </Segment>

  {/* PLAYIN AROUND */}


  {/* <Scrollspy items={ ['a', 'a', 'a'] } currentClassName="is-current">
  <Image src='\reactproto\img\grizzly.png' size='medium' />

    <li><a href="#section-1">section 1</a></li>
    <li><a href="#section-2">section 2</a></li>
    <li><a href="#section-3">section 3</a></li>
  </Scrollspy> */}
{/* This just displays the about us section which doesn't have much & can change  */}
    
    <Segment inverted style={{ padding: '8em 0em' }} vertical id="about">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>

          
            {/* Header text */}
            <Header inverted as='h3' style={{ fontSize: '2em' }}>
             About us
            </Header>
            {/* Dummy text */}
            <p style={{ fontSize: '1.33em' }}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>


            {/* Header text */}
            <Header inverted as='h3' style={{ fontSize: '2em' }}>
              More info
            </Header>
            {/* Dummy Text */}
            <p style={{ fontSize: '1.33em' }}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> 


{/* THIS IS THE FOOTER */}

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              {/* Header text */}
              <Header inverted as='h4' content='Contact Us' id="contact"/>
              <div>
                {/* Has icons for the contact info in the footer */}
              <Icon link name ='discord' size='large'  />
              <Icon link name='github' size='large'  />
              <Icon link name='instagram' size='large' />
              <Icon link name='twitter' size='large' />
              <Icon link name='slack' size='large' />
            </div>
            </Grid.Column>
            <Grid.Column width={3}>
              {/* Footer text could be changed */}
              <p>
                Made with 💚 by Exodia 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout