import React, { Component } from 'react';
import './newNab.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import Logo from './MyWays Logo@2x.png';
import DropD from './dropdown';
import { Modal, ModalHeader } from 'reactstrap';
import SignUp from '../home/SignUp';
import Login from '../home/Login';



export default class NewHeader extends Component {

    constructor(props) {
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

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModalL(){
        this.setState({
            isModalOpenL: !this.state.isModalOpenL
        });
    }
    toggleModalS(){
        this.setState({
            isModalOpenS: !this.state.isModalOpenS
        });
    }

    render() {
        return (
            <div className="outContainernewNav">
                <div className="mnewcontainer d-flex align-items-center">
                    {/* <div> */}
                        <div class="nav">
                            <input type="checkbox" id="nav-check" />
                            <div class="nav-header">
                                {/* <div class="nav-title">
                                    JoGeek
                                    </div> */}
                            </div>
                            <div class="nav-btn">
                                <label for="nav-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>

                            <div class="nav-links">
                            <DropD /><hr style={{margin:"0"}} />
                                <a href="#" >Instant Apply</a><hr style={{margin:"0"}} />
                                <a href="#" >Pricing</a><hr style={{margin:"0"}} />
                                <a href="#" >About us</a><hr style={{margin:"0"}} />

                            </div>
                        </div>
                    {/* </div> */}
                    <a href="/" className="navbar-brand" >
                        <img src={Logo} className="logo" alt="MyWays" />
                    </a>

                    <div className="logSig">
                        <div className="signdiv" onClick={this.toggleModalS}>
                            SIGN UP
                        </div>
                        <div >
                            <button type="button" className="btnlogin" onClick={this.toggleModalL}>LOGIN</button>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpenL} toggle={this.toggleModalL} 
                    className="modalLog" style={{position: "absolute",width:"100%", margin:'0'}}>
                        <ModalHeader toggle={this.toggleModalL}>
                            <p className="headL">Login</p>
                        </ModalHeader>
                        <Login isopen={this.state.isModalOpenL}
                            refreshPage={this.toggleModalL}/>
                </Modal>
                <Modal isOpen={this.state.isModalOpenS} toggle={this.toggleModalS} style={{top:"12vh"}}>
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
