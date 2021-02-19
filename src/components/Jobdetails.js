import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userdetails} from "../actions/index"
import {Link,withRouter} from "react-router-dom";
import Navbarmain from "./Navbarmain";
import  "./../styles/general.css";

class Jobdetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp:0,
            users:[],
            jobApplied: false,
            jobStatus: ''
        };
    }

    componentWillReceiveProps(){
        this.props.history.push("/jobdetails");
    }


    componentDidMount(){
        if(this.props.jobdetails != null) {
            this.setState({
                jobStatus: this.props.jobdetails.job_status
            });
        }
    }
    
    // Method to handle Apply button click. 
    handleApply() {
        this.setState({
            jobApplied : true
        });
    }
    
    render(){

        return <div>
            <Navbarmain/>
            <br/>
            <h3>Job Details</h3>
            <br/>
            <div className="container-fluid border text-left">
                <div className="row">
                    <div className="col-sm-2 font-weight-bold">Position:</div>
                    <div className="col-sm-4">{this.props.jobdetails.position_name}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2 font-weight-bold">Skills:</div>
                    <div className="col-sm-4">{this.props.jobdetails.requiredSkills}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2 font-weight-bold">Location:</div>
                    <div className="col-sm-4">{this.props.jobdetails.location}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2 font-weight-bold">Job Description:</div>
                    <div className="col-sm-4">{this.props.jobdetails.description}</div>
                </div>
                <br/>
                <div className="row align-self-center">
                    <div className="col-xl-3 border-0">
                        <br/>
                        <div className="form-group">
                            <button
                                className="btn btn-primary font-weight-bold"
                                type="button"
                                disabled={this.state.jobApplied}
                                onClick={() => {
                                    this.handleApply();
                                }}>
                                { this.state.jobApplied ? <div>Applied</div>  : <div>Apply</div>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        jobdetails: state.jobReducer.currentjobdetails,
        userId :state.signUpReducer.userId,
        userDetailsL : state.actionReducer.userDetails,
        userDetailsS : state.signUpReducer.userDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userdetails : (data) => dispatch(userdetails(data)),
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Jobdetails));