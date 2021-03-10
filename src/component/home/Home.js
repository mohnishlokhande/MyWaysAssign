import React, { Component } from 'react';
import './Home.css'
import SignUp from './SignUp';
import { Modal,ModalHeader } from 'reactstrap';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal= this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log("working" + this.state.isModalOpen );
    }


    render() {
        return (
            <>
                <div className="hcontain container">
                    <h1 className="hhead">Apply and hear back every time</h1>
                    <p className="hpara">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
                    <br/>
                    <button type="button" className="btn get-started-btn" onClick={this.toggleModal}>
                        <a className="hget" onClick={this.toggleModal}>Get Started</a>
                    </button> 
                    {/* <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg">Login</span>
                                    </Button> */}
                    {/* <a className="get-started-btn" style={{color:"white"}}>
                        <p className="hget">Get Started</p>
                    </a> */}
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal} className="homeTitle">
                            <p className="headS">Sign Up</p>
                            <p className="subS">It's quick and easy</p>    
                        </ModalHeader>
                        <SignUp isopen={this.state.isModalOpen}
                            refreshPage={this.toggleModal}/>
                    </Modal>
                </div>  
                
            </>
        )
    }
}
