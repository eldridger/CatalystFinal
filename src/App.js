import React, { Component } from 'react';
import Layout from './Layout';
import Counter from './Counter';
import GameSelector from './components/Pages/GameSelector';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <GameSelector />
      </Layout>
    );
  }
}
