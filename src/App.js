import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MerchantListComponent from './components/merchantListComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Welcome to Merchants App
        </div>

        <MerchantListComponent merchantList={[]} />
        
      </div>
    );
  }
}

export default App;
