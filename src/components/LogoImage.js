import React, {Component} from 'react';
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../styles/navbar.css";
import "./../styles/general.css";
import searchJobs from './../Images/searchjobs_icon.png';

class LogoImage extends Component {
    render() {
        return (
            <div>
                <img className = "logoImage" src = {searchJobs} alt="BV"></img>
            </div>
        );
    }
}

export default LogoImage;