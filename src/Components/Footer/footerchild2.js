import React from 'react';
import FooterChild3 from './footerchild3';

class FooterChild2 extends React.Component {

  render() {
    return(
      <div style={{background: 'yellow', padding: '10px'}}>
        <h3>Footer Child 2</h3>
        <FooterChild3/>
      </div>
    )
  }
}

export default FooterChild2;
