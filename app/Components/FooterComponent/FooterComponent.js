import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './FooterComponent.css';

//import mainLogo from'./logo.png';

const FooterComponent = () => (
  <footer id="footerWrap">
  <div className= "container">
   
      <Nav className="footerNav_1">
        <NavItem href="#">
       <b style={{"textAlign":'center'}}> Frequently Asked Questions  &nbsp; &nbsp; </b> <div className="vl" style={{"borderLeft": '1px solid black',
    "height": '22px',"marginLeft":'220px',"marginTop":"-18px",}}> </div>
        </NavItem>
        <NavItem href="#">
        <b>Contact Customer Service &nbsp; &nbsp;</b> <div className="vl" style={{"borderLeft": '1px solid black',
    "height": '22px',"marginLeft":'220px',"marginTop":"-18px","padding":'5px'}}> </div>
        </NavItem>
        <NavItem href="#">
        <b> Easy Returns</b>
        </NavItem>
      </Nav>

      <Nav className="footerNav_1 footerNav_2">
        <NavItem href="#">
          Privacy Policy&nbsp; <div className="footerline">| </div>
        </NavItem>
        <NavItem href="#" style={{"padding":'0px'}}>
          Site User Terms & Conditions
        </NavItem>
      </Nav>
  </div>
  </footer>
  );

export default FooterComponent;