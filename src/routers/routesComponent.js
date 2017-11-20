import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from '../pages/home.js';

class RoutesComponent extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default RoutesComponent;
