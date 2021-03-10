import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import Logo from './MyWays Logo@2x.png';
import DropD from './dropdown';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);                
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (    
            <div className="outContainerNav">
                <div className="mcontainer d-flex align-items-center">
                    <a href="/" className="navbar-brand" >
                        <img src={Logo} style={{width:"66px"}}  alt="MyWays"/>
                    </a>
                    {/* <br/> */}
                    
                    <Navbar className="nav-menu ml-auto" dark expand="md">
                        {/* <NavbarToggler onClick={this.toggleNav} />&nbsp; */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleNav}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <DropD/>
                                </NavItem>
                                <NavItem>
    
                                    <NavLink className="nav-link" to="/other"><span className="fa fa-flash fa-lg"></span>
                                        Instant Apply&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/other">
                                        Pricing&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/other">
                                        About us&nbsp;
                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </Navbar>

                    <div className="logSig">
                        <div className="signdiv" to="/other">
                            SIGN UP
                        </div>
                        <div >
                            <button type="button" className="btnlogin">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
