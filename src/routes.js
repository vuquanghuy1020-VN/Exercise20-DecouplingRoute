import React from 'react';
import { Route, useParams } from 'react-router-dom';

// Component UserProfile sử dụng hook useParams của react-router-dom v6/v7
const UserProfile = () => {
  const { userId } = useParams();
  return <h1>User Profile: {userId || 'Guest'}</h1>;
};

export const routes = [
  {
    path: '/',
    component: <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: '/products',
    component: <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: <h1>Contact Page</h1>,
  },
  {
    // Hỗ trợ cả /users và /users/:userId
    path: '/users',
    component: <UserProfile />,
  },
  {
    path: '/users/:userId',
    component: <UserProfile />,
  },
];

export const renderRoutes = () => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={route.component}
    />
  ));
};
