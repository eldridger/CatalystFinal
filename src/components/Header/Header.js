import React from 'react';
import menuData from './menuData';
import './header.css';

const displayMenuItem = item => <li className="menuItem" key={item.id}>{item.text}</li>;

export default function Header({ menu = menuData }) {
  return (
    <div className="header row cat-header">
      <h2 className="title">Catalyst ESports</h2>
      <ul>{menu.map(displayMenuItem)}</ul>
    </div>
  );
}
