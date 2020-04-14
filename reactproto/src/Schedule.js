import React, { Component } from 'react'
import {
  Header,
  Icon,
  Segment,
  Table,
} from 'semantic-ui-react'


const scheduleTables= () => (
    <Segment inverted >
 

  {/* This show the header for schedule  */}
  <Segment inverted style={{ padding: '1em 0em', margin: '-29px' }} vertical id="schedule">
    <Header style={{marginTop: 100, padding: '30px'
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

  </Segment>
)

export default scheduleTables



