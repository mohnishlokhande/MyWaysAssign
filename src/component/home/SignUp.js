import React, { Component } from 'react';
import {Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label,Row, Col } from 'reactstrap';
import './Home.css';

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: true,
            firstname : '',
            lastname: '',
            password : '',
            email :'',
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
            firstname:'',
            lastname:'',
            password:'' ,
            email :'',
        })
       
       }
    

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sign Up</ModalHeader>
                    <ModalBody>
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
                            <FormGroup row>
                                <Col className="feedButton">
                                    <input type="submit" value="Register" className="btn btnReg">
                                    </input>
                                </Col>
                            </FormGroup>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
