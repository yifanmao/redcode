import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {NavLink} from 'react-router-dom';

class RoutesList extends Component {
  render() {
    // Parent list style
    const style = {
      padding: '16px 16px 16px 55px',
      fontSize: '14px',
    }
    return (
      <List className="nav-menu">
        <ListItem
          primaryText="Dashboard"
          innerDivStyle={style}
          leftIcon={<i className="material-icons">dashboard</i>}
          containerElement={<NavLink to="/" exact />}
        />
      </List>
    );
  }
}

export default RoutesList;
