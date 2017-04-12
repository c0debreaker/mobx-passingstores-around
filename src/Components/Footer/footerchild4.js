import React from 'react';
import FooterChild5 from './footerchild5';

class FooterChild4 extends React.Component {

  render() {
    return(
      <div style={{background: 'blue', padding: '10px'}}>
        <h3>Footer Child 4</h3>
        <FooterChild5/>
      </div>
    )
  }
}

export default FooterChild4;
