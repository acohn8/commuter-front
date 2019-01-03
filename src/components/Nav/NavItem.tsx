import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  to: string;
}

const NavItem = ({ to, name }: IProps) => <Link to={to}>{name}</Link>;

export default NavItem;
