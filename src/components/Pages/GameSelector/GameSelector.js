import React from 'react';
import BlockList from '../../BlockList';
import games from './testGameData';

export default function GameSelector() {
  return (
    <BlockList items={games} />
  );
}
