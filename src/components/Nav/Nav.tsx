import React from 'react';
import NavBackground from './NavBackground';
import Container from '../../elements/Container';
import NavItems from './NavItems';
import NavItem from './NavItem';

const Nav = () => (
  <Nav.Background>
    <Nav.Container>
      <NavItems>
        <NavItem name="Trips" to="/" />
      </NavItems>
    </Nav.Container>
  </Nav.Background>
);

Nav.Background = NavBackground;
Nav.Container = Container;
Nav.Items = NavItems;
Nav.Item = NavItem;

export default Nav;
