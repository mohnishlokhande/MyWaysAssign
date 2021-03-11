import React, { Component } from 'react';
import {Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label,Row, Col } from 'reactstrap';
import './Home.css';
import SignUp from './SignUp';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpenS: false,
            isModalOpenL: false,
            email :'',
            password:'' ,
        };
        this.toggleModalS= this.toggleModalS.bind(this);
        this.refreshPage= this.refreshPage.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.toggleModalL= this.toggleModalL.bind(this);
    }

    toggleModalS(){
        this.setState({
            isModalOpenS: !this.state.isModalOpenS
        });
    }
    refreshPage(){ 
        window.location.reload(false);
        this.setState({
            isModalOpen: this.props.isopen
        });
    }
    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })

    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({
            email :'',
            password:'' ,  
            isModalOpenL: !this.state.isModalOpenL
        })   
        
    }    
    toggleModalL(){
        this.setState({
            isModalOpenL: !this.state.isModalOpenL,
            isModalOpen: !this.state.isModalOpen
        });
        console.log("working" + this.state.isModalOpen +this.state.isModalOpenL);
    }


    render() {
        return (
            <>
                <ModalBody className="modalL" style={{padding:"35px"}}>
                    <div className="logouterbox">
                        <div className="headLogin">
                            <p className="stu">Student</p>
                            <p>_____</p>
                        </div>

                    <form  onSubmit={this.handleSubmit}>
                        <FormGroup className="col-md-12">
                                <Input type="email" id="email" name="email" value ={this.state.email} onChange = {this.handleChange}
                                    placeholder="Email" required/>
                        </FormGroup>

                        <FormGroup className="col-md-12"> 
                                <Input type="password" id="password" name="password" value ={this.state.password} onChange = {this.handleChange}
                                    placeholder="Password" required/>
                        </FormGroup> 
                        <p className="forget">Forgot Password?</p>
                        <FormGroup className="col-md-12"> 
                                <Input type="submit" value ="Login" className="btn btnSign" 
                                    />
                        </FormGroup> 
                        <p className="newL" onClick={this.toggleModalL} >New to MyWays? Sign Up here</p>
                    </form>
                    </div>
                </ModalBody>

            </>
        )
    }
}
