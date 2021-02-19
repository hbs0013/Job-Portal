import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {Component} from 'react';
import "./../styles/navbar.css";
import {withRouter} from "react-router-dom";
import bgImage from './../Images/bgImage.png';
import searchJobs from './../Images/searchjobs_icon.png';

class MainPage extends Component {
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-inverse marginImage">
                    <div className="navbar-header">
                        <img src = {searchJobs} className="customImage" alt="BV" ></img>
                    </div>
                    <ul className="nav navbar-nav ml-auto btn-toolbar">
                        <li className="float-left"><button className="btn btn-outline-success button-padding" onClick={() => {
                            this.props.history.push("/login")
                        } }>Login</button></li>
                        <li className="float-left"><button className="btn btn-outline-success" onClick={() => {
                            this.props.history.push("/signup")
                        } }>Sign Up</button></li>
                    </ul>
                </nav>
                <div className="img-fluid" ><img className="bgImage" src={bgImage} /></div>
            </div>
        );
    }
}

export default withRouter(MainPage);