import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Root } from './components/root/root';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Root/>
      </MuiThemeProvider>
    );
  }
}

export default App;
