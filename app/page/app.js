import React from 'react';
import {connectRedux} from '../connect';

class App extends React.Component {
  render(){
    return `App ${this.props.text}`
  }
}

App = connectRedux(App);
export default App;