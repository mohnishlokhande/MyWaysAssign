import React, { Component } from 'react';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="hcontain container">
                    <h1 className="hhead">Apply and hear back every time</h1>
                    <p className="hpara">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
                    <br/>
                    <button type="button" className="btn get-started-btn">
                        <a className="hget">Get Started</a>
                    </button> 
                    {/* <a className="get-started-btn" style={{color:"white"}}>
                        <p className="hget">Get Started</p>
                    </a> */}
                </div>  
            </>
        )
    }
}
