import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import { Modal,ModalHeader } from 'reactstrap';
import Logo from './MyWays Logo@2x.png';
import DropD from './dropdown';
import Login from '../home/Login';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);  
        this.toggleModal= this.toggleModal.bind(this);
              
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log("working" + this.state.isModalOpen );
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
                            <button type="button" className="btnlogin" onClick={this.toggleModal}>LOGIN</button>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modalLog">
                        <ModalHeader toggle={this.toggleModal}>
                            <p className="headL">Login</p>
 
                        </ModalHeader>
                        <Login isopen={this.state.isModalOpen}
                            refreshPage={this.toggleModal}/>
                </Modal>
            </div>
        )
    }
}
