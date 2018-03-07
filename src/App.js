import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MerchantListContainer from './containers/merchantListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Welcome to Merchants App
        </div>

        <MerchantListContainer />
        
      </div>
    );
  }
}

export default App;
