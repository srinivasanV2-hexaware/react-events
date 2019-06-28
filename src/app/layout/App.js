import React, {Component} from 'react';

import EventsDashboard from '../../features/events/EventsDashboard/EventsDashboard';
import Navbar from '../../features/nav/navbar/navbar';
import { Container } from 'semantic-ui-react';


export class App extends Component {
  render(){
  return (<div>
  <Navbar/>
  <Container className="main">
  <EventsDashboard/>
  </Container>
  </div>);
  }
}

export default App;
