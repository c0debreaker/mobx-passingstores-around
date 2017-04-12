import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('UserProfileStore', 'ServerNamesStores') @observer
class FooterChild5 extends React.Component {

  render() {
    return(
      <div style={{background: 'cyan', padding: '10px'}}>
        <h3>Footer Child 5</h3>
        Display Name: {this.props.UserProfileStore.UserProfileDisplayName}
      </div>
    )
  }
}

export default FooterChild5;
