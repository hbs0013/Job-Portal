import React, {Component} from 'react';
import "./../styles/navbar.css";
import {connect} from 'react-redux';
import {Link,withRouter} from "react-router-dom";
import {requestLogout} from "./../actions/index";
import searchJobs from './../Images/searchjobs_icon.png';

class Navbarmain extends Component {

    handleLogout(){
        this.props.dispatch(this.props.requestLogout(this.props))
        this.props.history.push('/login');
    }

    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-inverse">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <img src = {searchJobs} className="customImage float-left" alt="BV" ></img>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <li><button className="btn  btn-success font-weight-bold rightButton" onClick={() => {this.handleLogout()} }>Logout</button></li>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    let actions = { requestLogout };
    return { ...actions, dispatch };
}

export default withRouter(connect(null, mapDispatchToProps)(Navbarmain));