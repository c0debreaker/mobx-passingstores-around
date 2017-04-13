import React from 'react';
import FooterChild4 from './footerchild4';

class FooterChild3 extends React.Component {

  render() {
    return(
      <div style={{background: '#e2c225', padding: '10px'}}>
        <h3>Footer Child 3</h3>
        <FooterChild4/>
      </div>
    )
  }
}

export default FooterChild3;
