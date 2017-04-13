import React from 'react';
import FooterChild2 from './footerchild2';

class FooterChild1 extends React.Component {

  render() {
    return(
      <div style={{background: '#89ccf3', padding: '10px'}}>
        <h3>Footer Child 1</h3>
        <FooterChild2/>
      </div>
    )
  }
}

export default FooterChild1;
