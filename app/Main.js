import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './page/app';
import Home from './page/home';
import {connectRedux} from './connect';

class Main extends React.Component {
  render() {
      this.props.changeText('Test');
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

Main = connectRedux(Main);
export default Main;
