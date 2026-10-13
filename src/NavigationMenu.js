import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav style={{ padding: '10px 0', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <Link to="/">Home</Link> {' | '}
      <Link to="/products">Products</Link> {' | '}
      <Link to="/about">About</Link> {' | '}
      <Link to="/contact">Contact</Link> {' | '}
      <Link to="/users">Users</Link> {' | '}
      <Link to="/users/123">User 123</Link>
    </nav>
  );
};

export default NavigationMenu;
