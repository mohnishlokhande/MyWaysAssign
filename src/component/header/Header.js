import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import { Modal,ModalHeader } from 'reactstrap';
import Logo from './MyWays Logo@2x.png';
import DropD from './dropdown';
import Login from '../home/Login';
import SignUp from '../home/SignUp';
import Flash from './Instant logo.png';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpenL: false,
            isModalOpenS:false
        };
        this.toggleNav = this.toggleNav.bind(this);  
        this.toggleModalL= this.toggleModalL.bind(this);
        this.toggleModalS= this.toggleModalS.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModalL(){
        this.setState({
            isModalOpenL: !this.state.isModalOpenL
        });
        console.log("working" + this.state.isModalOpenL );
    }
    toggleModalS(){
        this.setState({
            isModalOpenS: !this.state.isModalOpenS
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
    
                                    <NavLink className="nav-link" to="/other">
                                        {/* <span className="fa fa-flash fa-lg"></span> */}
                                        <img src={Flash} style={{width:"30px", height:"30px"}} alt="/"/>
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
                        <span className="signdiv" onClick={this.toggleModalS}>
                            SIGN UP
                        </span>
                        <div >
                            <button type="button" className="btnlogin" onClick={this.toggleModalL}>LOGIN</button>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpenL} toggle={this.toggleModalL} className="modalLog">
                        <ModalHeader toggle={this.toggleModalL}>
                            <p className="headL">Login</p>
                        </ModalHeader>
                        <Login isopen={this.state.isModalOpenL}
                            refreshPage={this.toggleModalL}/>
                </Modal>
                <Modal isOpen={this.state.isModalOpenS} toggle={this.toggleModalS}>
                        <ModalHeader toggle={this.toggleModalS} className="homeTitle">
                            <p className="headS">Sign Up</p>
                            <p className="subS">It's quick and easy</p>    
                        </ModalHeader>
                        <SignUp isopen={this.state.isModalOpenS}
                            refreshPage={this.toggleModalS}/>
                </Modal>
            </div>
        )
    }
}
