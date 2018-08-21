import React, { Component } from 'react';
import Calendar from './components/smart/calendar'

import './assets/css/main.css'
import './assets/css/normalize.css'


class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default App;
