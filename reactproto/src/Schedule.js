import React, { Component } from 'react'
import {
  Header,
  Icon,
  Segment,
  Table,
} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

function schedulePage (){
/**
 * A react element which is called by App.js.
 * This element creates the 1st schedule for Grizzly Hacks events
 * <Fade top> is the parent to Header to allow the text to appear from the top of the page.
 * <Fade bottom> is the parent to <Table> to allow the Table to appear form the bottom of the page.
 * The developer can change rows with TBA by replacing it with new text information
 */
const firstTable= () => (
    <Segment inverted>
      {/* This show the header for schedule  */}
      <Segment inverted style={{ padding: '1em 0em', margin: '-29px' }} vertical id="schedule">
        <Fade top>
          <Header style={{color: 'white', marginTop: 0, padding: '17px'}}size='huge'> Schedule </Header>
        </Fade>
      </Segment>
  
  {/* BEGINNING OF FIRST TABLE FOR SCHEDULE */}
  
  {/* This is responsible for the table where the schedule is  */}
  {/* inverted is added so it appears black. If you want to learn more about tables
  look at Semantic UI React  */}

  <Fade bottom>
    <Table celled striped inverted fixed style={{ }}>
      <Table.Header>
        <Table.Row>
          {/* Positioning of content*/}
          <Table.HeaderCell colSpan='3' collapsing textAlign='center'>Friday, Jan. 1st</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      {/* First row of table  */}
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing textAlign = 'center'>
            {/* This displays the icon for "checkboard" using Semantic UI React */}
            <Icon name='clipboard check' /> TBA </Table.Cell>
          {/* Shows content in table  */}
          <Table.Cell collapsing textAlign = 'center'> TBA </Table.Cell>
          {/* Shows the time in the last column of the table  */}
          <Table.Cell collapsing textAlign='center'> TBA </Table.Cell>
        </Table.Row>
        <Table.Row>
  
          {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
          <Table.Cell collapsing textAlign = 'center'>
            {/* Shows us the icon */}
            <Icon name='star' /> TBA
          </Table.Cell>
          {/* Column content  */}
          <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
          {/* Last column content */}
          <Table.Cell textAlign = 'center'>TBA</Table.Cell>
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
</Fade>


<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br> 

  </Segment>
) 

/**
 * A react element which is called by App.js.
 * This element creates the 2nd schedule for Grizzly Hacks events
 * <Fade top> is the parent to Header to allow the text to appear from the top of the page.
 * <Fade bottom> is the parent to <Table> to allow the Table to appear form the bottom of the page.
 * The developer can change rows with TBA by replacing it with new text information
 */
const secondTable = () => (
  <Segment inverted >
<Segment inverted style={{ padding: '1em 0em', margin: '-29px' }} >
</Segment>

{/* BEGINNING OF SECOND TABLE FOR SCHEDULE */}

{/* This is responsible for the table where the schedule is  */}
{/* inverted is added so it appears black. If you want to learn more about tables
look at Semantic UI React  */}

<Fade bottom>
  <Table celled striped inverted fixed>
    <Table.Header>
      <Table.Row>
        {/* Positioning of content*/}
        <Table.HeaderCell colSpan='3' collapsing textAlign='center'>Saturday, Jan. 1st</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

{/* First row of table  */}
    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing textAlign = 'center'>
          {/* This displays the icon for "checkboard" using Semantic UI React */}
          <Icon name='food' /> Breakfeast
        </Table.Cell>
        {/* Shows content in table  */}
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        {/* Shows the time in the last column of the table  */}
        <Table.Cell collapsing textAlign='center'>
          TBA
        </Table.Cell>
      </Table.Row>
      <Table.Row>

        {/* Every row afterwards works the same way as the first row. (Look at first row for explanation)  */}
        <Table.Cell collapsing textAlign = 'center'>
          {/* Shows us the icon */}
          <Icon name='bullseye' /> TBA
        </Table.Cell>
        {/* Column content  */}
        <Table.Cell collapsing textAlign = 'center'>TBA</Table.Cell>
        {/* Last column content */}
        <Table.Cell textAlign = 'center'>TBA</Table.Cell>
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
</Fade>

</Segment>
) 



return( 
  [firstTable(),  secondTable()]
);


}
export default schedulePage



