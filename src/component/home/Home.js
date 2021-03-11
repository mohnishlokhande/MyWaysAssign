import React, { Component } from 'react';
import './Home.css'
// import SignUp from './SignUp';
import { Modal,ModalHeader, ModalBody, Row } from 'reactstrap';
import {FormGroup, Input} from 'reactstrap';
import Success from '../header/Icon awesome-check-circle@2x.png';

import '../header/Header.css'

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            isModalOTP: false,
            firstname : '',
            lastname: '',
            password : '',
            email :'',
        };
        this.toggleModalS= this.toggleModalS.bind(this);
        this.toggleModalOTP= this.toggleModalOTP.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.toggleModalSucess= this.toggleModalSucess.bind(this);
        this.combine= this.combine.bind(this);
    }

    toggleModalS(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log("working" + this.state.isModalOpen );
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
    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })
    toggleModalOTP(){
        this.setState({
            isModalOTP: !this.state.isModalOTP
        });
    }
    toggleModalSucess(){
        this.setState({
            isModalSucess: !this.state.isModalSucess
        });
    }
    combine(){
        this.toggleModalOTP();
        this.toggleModalSucess();
        setTimeout(()=>{
            this.setState({isModalSucess:!this.state.isModalSucess})
        },2000)
    }
    render() {
        return (
            <>
                <div className="hcontain container">
                    <h1 className="hhead">Apply and hear back every time</h1>
                    <p className="hpara">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
                    <br/>
                    <button type="button" className="btn get-started-btn" onClick={this.toggleModalS}>
                        <a className="hget" onClick={this.toggleModalS}>Get Started</a>
                    </button> 

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModalS} style={{top:"12vh"}} className="modalsign">
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
                    <Modal isOpen={this.state.isModalOTP} toggle={this.toggleModalOTP} style={{top:"12vh"}} className="modalsuccess">
                        <ModalBody className="boxOTP">
                            <div className="boxSinner">
                                <h1 className="successH">OTP sent!</h1>
                                <br/>
                                <Input placeholder="Enter your OTP" required></Input>
                                <p className="emailOTP">One time Passcode sent to your email ID- abc@gmail.com</p>
                                <Input type="submit" value ="Enter" className="btn btnOTP" onClick={this.combine}
                                    />
                            </div>
                        </ModalBody>
                    </Modal>

                    <Modal isOpen={this.state.isModalSucess} toggle={this.toggleModalSucess} style={{top:"12vh"}} className="modalsuccess">
                        <ModalBody className="boxsuccess">
                            <img src={Success} style={{width:"73px"}}  alt="Successful"/><br/>
                            <h1 className="successH">Thanks. Successful!</h1>
                        </ModalBody>
                    </Modal>
                </div>  
                
            </>
        )
    }
}
