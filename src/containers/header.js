import React, {Component} from 'react';
import AvatarDropdown from '../components/avatarDropdown.js';
import Notification from './notification.js';


class Header extends Component {
  render () {
    return (
      <header className="an-header">
        <div className="header-right">
          {/* <Notification/>
          <AvatarDropdown/> */}
        </div>
      </header>
    );
  }
}

export default Header;
