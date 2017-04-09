import React from 'react';

import { Head } from './head/head';
import { Body } from './body/body';

export class Root extends React.Component {
  render() {
    return (
      <main>
        <Head/>
        <Body/>
      </main>
    );
  }
}