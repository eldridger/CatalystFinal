import React from 'react';

export default function Block({ game }: {
  game: string
}) {
  return (
    <div className="block">
      {game}
    </div>
  );
}
