import React from 'react';

export default function Body ({ children }) {
  return (
    <div className="body row scroll-y">
      <h1>Hello, World!</h1>
      {children}
    </div>
  );
}
