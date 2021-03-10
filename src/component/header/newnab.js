import React, { Component } from 'react';
import './newNab.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import Logo from './MyWays Logo@2x.png';
import DropD from './dropdown';

export default class NewHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
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
