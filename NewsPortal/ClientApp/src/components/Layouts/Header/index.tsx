import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div>
    <Link to="/">Main page</Link>
    <Link to="/news">News page</Link>
  </div>
);
