import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';
import Theme from 'reapp-ui/helpers/Theme';
import theme from 'theme/theme';

export default React.createClass({
  render() {
    var button = (
      <Button
        iconProps={{
          file: require('reapp-ui/assets/icons/hamburger.svg'),
          stroke: 1,
          size: 24,
          animations: false
        }}
        chromeless />
    );

    var menu = (
      <Menu>
        <Link to="/">Dogs</Link>
      </Menu>
    );

    return (
      <Theme {...theme}>
        <LayoutLeftNav
          title="reapp-dog-example"
          side={menu}
          handle={button}>
          <RouteHandler {...this.props} />
        </LayoutLeftNav>
      </Theme>
    );
  }
});