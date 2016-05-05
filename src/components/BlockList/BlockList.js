import React from 'react';
import Block from './Block';

export default function BlockList({ items }: {
  items: Array<any>
}) {
  return (
    <div className="blockList">
      {items.map(item =>
        <Block game={item.game} key={item.id} />
      )}
    </div>
  );
}
