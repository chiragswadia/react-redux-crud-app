import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MerchantListContainer from './containers/merchantListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Merchants Management App
        </div>

        <div className="container">
          <MerchantListContainer />
        </div>

        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-center"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
        
      </div>
    );
  }
}

export default App;
