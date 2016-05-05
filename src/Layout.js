import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

import './style.css';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Body>{children}</Body>
    </div>
  );
}
