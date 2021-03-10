import React, { Component } from 'react';
import {Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label,Row, Col } from 'reactstrap';
import './Home.css';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: true,
            email :'',
            password:'' ,
        };
        this.toggleModal= this.toggleModal.bind(this);
        this.refreshPage= this.refreshPage.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
        })   
    }    
    

    render() {
        return (
            <>
                <ModalBody className="modalL">
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
                        <p className="newL">New to MyWays? Sign Up here</p>
                    </form>
                </ModalBody>
            </>
        )
    }
}
