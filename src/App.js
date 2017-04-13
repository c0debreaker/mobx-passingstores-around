import React, { Component } from 'react';
import { Provider, PropTypes } from 'mobx-react';
import { toJS } from 'mobx';
import Footer from './Components/Footer';
import Header from './Components/Header';

import ServerNamesStores from './Stores/ServerNamesStores';
import UserProfileStore from './Stores/UserProfileStore';
const stores = { ServerNamesStores,  UserProfileStore}

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)
    const { getServerUrls } = ServerNamesStores
    const { UserProfileObject } = UserProfileStore;
    console.log('@@@ UserProfileDisplayName', UserProfileObject.results[0].name.displayName)
    console.log('getServerUrls using toJS()', toJS(getServerUrls));
    this.state = {
      displayName: ''
    }
  }

  updateWebUrl = () => {
    ServerNamesStores.updateUrl('http://www.'+(0|Math.random()*9e6).toString(32)+'.com');
  }

  updateDisplayName = () => {
    UserProfileStore.updateDisplayName(this.state.displayName);
    this.setState({displayName: ''})
  }

  onInputChange = (e) => {
    this.setState({displayName: e.target.value})
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13 ) {
      return this.updateDisplayName();
    }
  }

  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <div className="topbar">
            <span>Display Name(in App.js): {UserProfileStore.UserProfileDisplayName}</span>
            <span><input onChange={this.onInputChange} onKeyDown={this.handleKeyDown} value={this.state.displayName}/><button onClick={this.updateDisplayName}>Update display name</button></span>
            <span><button onClick={this.updateWebUrl}>Randomize WebServer Url</button></span>
          </div>
          <div>
            <Header UserProfileStore={UserProfileStore} ServerNamesStores={ServerNamesStores}/>
          </div>
          <div>
            <Footer/>
          </div>

        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  ServerNamesStores: PropTypes.observableObject,
  UserProfileStore: PropTypes.observableObject
}

export default App;
