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
                    <br/>
                    
                    <Navbar className="nav-menu ml-auto" dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />&nbsp;
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
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
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/other">
                                    Sign up&nbsp;
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/login">
                                    <button type="button" className="btn btn-success get-started-btn">
                                        Login
                                    </button> 
                                </NavLink>
                            </NavItem>
                        </Nav>
                        
                </Navbar>  
                </div>
            </div>
        )
    }
}
