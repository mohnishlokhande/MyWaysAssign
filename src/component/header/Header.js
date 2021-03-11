import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import { Modal,ModalHeader, ModalBody, Row } from 'reactstrap';
import {FormGroup, Input} from 'reactstrap';
import Logo from './MyWays Logo@2x.png';
import DropD from './dropdown';
import Login from '../home/Login';
import SignUp from '../home/SignUp';
import Flash from './Instant logo.png';
import Success from './Icon awesome-check-circle@2x.png';
import '../home/Home.css';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpenL: false,
            isModalOpenS:false,
            isModalSucess: false,
            isModalOTP:false,
            emailID :'',
            passwordLog:'' ,
            firstname : '',
            lastname: '',
            password : '',
            email :'',
        };
        this.toggleNav = this.toggleNav.bind(this);  
        this.toggleModalL= this.toggleModalL.bind(this);
        this.toggleModalS= this.toggleModalS.bind(this);
        this.toggleModalSucess= this.toggleModalSucess.bind(this);
        this.toggleModalOTP= this.toggleModalOTP.bind(this);
        this.changeModal= this.changeModal.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleLogin= this.handleLogin.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.combine= this.combine.bind(this);
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
    }
    toggleModalS(){
        this.setState({
            isModalOpenS: !this.state.isModalOpenS
        });
    }
    toggleModalSucess(){
        this.setState({
            isModalSucess: !this.state.isModalSucess
        });
    }
    toggleModalOTP(){
        this.setState({
            isModalOTP: !this.state.isModalOTP
        });
    }
    changeModal(){
        this.setState({
            isModalOpenS: !this.state.isModalOpenS,
            isModalOpenL: !this.state.isModalOpenL
        })
    }

    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })

    handleLogin=(e)=>{
        e.preventDefault();

        this.setState({
            emailID :'',
            passwordLog:'' ,  
            isModalOpenL: !this.state.isModalOpenL
        })   
    }  
    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({
            firstname:'',
            lastname:'',
            password:'' ,
            email :'',
        })
        this.toggleModalS();
        this.toggleModalOTP();
        // this.props.history.push('/home')
    }
    combine(){
        this.toggleModalOTP();
        this.toggleModalSucess();
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
                <Modal isOpen={this.state.isModalOpenL} toggle={this.toggleModalL} 
                    className="modalLog" style={{position: "absolute",width:"100%", margin:'0'}}>
                        <ModalHeader toggle={this.toggleModalL}>
                            <p className="headL">Login</p>
                        </ModalHeader>
                        <ModalBody className="modalL" style={{padding:"35px"}}>
                            <div className="logouterbox">
                                <div className="headLogin">
                                    <p className="stu">Student</p>
                                    <p>_____</p>
                                </div>

                            <form  onSubmit={this.handleLogin}>
                                <FormGroup className="col-md-12">
                                        <Input type="email" id="emailID" name="emailID" value ={this.state.emailID} onChange = {this.handleChange}
                                            placeholder="Email" required/>
                                </FormGroup>

                                <FormGroup className="col-md-12"> 
                                        <Input type="password" id="passwordLog" name="passwordLog" value ={this.state.passwordLog} onChange = {this.handleChange}
                                            placeholder="Password" required/>
                                </FormGroup> 
                                <p className="forget">Forgot Password?</p>
                                <FormGroup className="col-md-12"> 
                                        <Input type="submit" value ="Login" className="btn btnSign" 
                                            />
                                </FormGroup> 
                                <p className="newL" onClick={this.changeModal} >New to MyWays? Sign Up here</p>
                            </form>
                            </div>
                        </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOpenS} toggle={this.toggleModalS} style={{top:"12vh"}}>
                        <ModalHeader toggle={this.toggleModalS} className="homeTitle">
                            <p className="headS">Sign Up</p>
                            <p className="subS">It's quick and easy</p>    
                        </ModalHeader>
                        <ModalBody className="modalBS">
                            <form  onSubmit={this.handleSubmit}>
                                <Row className="col-md-12">
                                <FormGroup className="col-md-6">
                        
                                        <Input type="text" id="firstname" name="firstname" value ={this.state.firstname} onChange = {this.handleChange}
                                            placeholder="First Name" required/>

                                </FormGroup>
                                <FormGroup className="col-md-6">
                    
                                        <Input type="text" id="lastname" name="lastname" value ={this.state.lastname} onChange = {this.handleChange}
                                            placeholder="Last Name" required/>
                                </FormGroup>
                                </Row>
                                <FormGroup className="col-md-12">
                                    
                                        <Input type="email" id="email" name="email" value ={this.state.email} onChange = {this.handleChange}
                                            placeholder="Your Email" required/>
            
                                </FormGroup>

                                <FormGroup className="col-md-12"> 
                                        <Input type="password" id="password" name="password" value ={this.state.password} onChange = {this.handleChange}
                                            placeholder="Password" required/>
                                </FormGroup> 
                                <br/>
                                <FormGroup className="col-md-12"> 
                                        <Input type="submit" value ="Sign Up" className="btn btnSign"
                                            />
                                </FormGroup>
                            </form>
                        </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalSucess} toggle={this.toggleModalSucess} style={{top:"12vh"}} className="modalsuccess">
                    <ModalBody className="boxsuccess">
                        <img src={Success} style={{width:"73px"}}  alt="Successful"/><br/>
                        <h1 className="successH">Thanks. Successful!</h1>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOTP} toggle={this.toggleModalOTP} style={{top:"12vh"}} className="modalsuccess">
                    <ModalBody className="boxOTP">
                        <div className="boxSinner">
                            <h1 className="successH">OTP sent!</h1>
                            <br/>
                            <Input placeholder="Enter your OTP"></Input>
                            <p className="emailOTP">One time Passcode sent to your email ID- abc@gmail.com</p>
                            <Input type="submit" value ="Enter" className="btn btnOTP" onClick={this.combine}
                                />
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
