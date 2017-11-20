/*
 * filename: routers.js
 * mainly responsivle for all routes component
 * change and sidebar routlist menu item
 * */

import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesList from './routesList.js';
import RoutesComponent from './routesComponent.js';
import { Scrollbars } from 'react-custom-scrollbars';
import Footer from '../components/footer.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { ScrollContext } from 'react-router-scroll';

const style = {
  background: '#258df2'
}

class SidebarMenuRouters extends Component {
  constructor () {
    super();
    this.state = {
      menuOpen: true,
    };
    this.menuCollapseWithResize = this.menuCollapseWithResize.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // menu collapse when on mobile function
  menuCollapseWithResize (){
    if (window.innerWidth < 991) {
      this.setState({menuOpen: false});
    }
    if (window.innerWidth > 991) {
      this.setState({menuOpen: true});
    }
  }

  // Sidebar collapse when tablet
  componentDidMount () {
    window.addEventListener('resize', this.menuCollapseWithResize);

    if (window.innerWidth < 991) {
      this.setState({menuOpen: false});
    }
  }

  // Sidebar collapse when tablet
  componentWillUnmount() {
    window.removeEventListener('resize', this.menuCollapseWithResize);
  }

  // Sidebar toggle
  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    // Page content class change based on menu toggle
    const pageContent = classNames ({
      'readmin-page-content' : true,
      'menu-open': this.state.menuOpen
    });

    // header left part with logo and toggle button
    const HeaderLogoWithMenu = () => (
      <div className="an-header" style={style}>
        <div className="header-left">
          <a className="brand" href="#">Re-Admin</a>
          <FloatingActionButton
            mini={true}
            secondary={true}
            onClick={this.toggleMenu}
          >
            <i className="material-icons">format_indent_decrease</i>
          </FloatingActionButton>
        </div>
      </div>
    );

    const RoutesBody = () => (
      <div>
        <div className="readmin-sidebar">
          <HeaderLogoWithMenu />
          <Drawer open={this.state.menuOpen} className="menu-drawer">
            <Scrollbars>
              <RoutesList />
            </Scrollbars>
          </Drawer>
        </div>
        <div className={pageContent}>
          <RoutesComponent />
          <Footer />
        </div>
      </div>
    )

    return (
      <Router>
        <ScrollContext>
          <RoutesBody />
        </ScrollContext>
      </Router>
    );
  }
}

export default SidebarMenuRouters;
