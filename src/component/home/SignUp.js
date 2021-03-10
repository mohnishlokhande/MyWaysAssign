import React, { Component } from 'react';
import {Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label,Row, Col } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {

    constructor(isopen){
        super(isopen);
        this.state = {
            isModalOpen: {isopen},
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
        // this.props.history.push('/home')
    }
    componentWillReceiveProps({isopen}) {
        this.setState({...this.state,isopen})
        console.log("update " + isopen)
      }

    render() {
        return (
            <>
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
            </>
        )
    }
}
