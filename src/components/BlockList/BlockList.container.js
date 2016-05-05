/* @flow */
import React from 'react';
import BlockList from './BlockList';

const defItems = [{
  game: 'game1',
  id: 1,
}, {
  game: 'game2',
  id: 2,
}];

export default function BlockListContainer({ items = defItems }: {
  items: Array<any>
}) {
  return (
    <div>
      <BlockList items={items} />
    </div>
  );
}
