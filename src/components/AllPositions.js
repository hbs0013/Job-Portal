import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./../styles/general.css";
import {Link,withRouter} from "react-router-dom";
import {jobdetails} from "../actions/index"
import {userdetails} from "../actions";

class AllPositions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            jobs: [{jobId: "R100319", position_name: "Software Developer", description: "The Developer will be responsible for front-end as well as back-end development. The preferred skillsets are ReactJs, TypeScript, JavaScript, HTML5, CSS3, Java, Spring Boot, and AWS.", requiredSkills: "ReactJs, TypeScript, JavaScript, HTML5, CSS3, Java, Spring Boot", userDetails:{firstname: "Harshal", lastname: "Shah"},company: "TSYS", datePosted: "Feb 15 2021", location: "Atlanta, Georgia"},
                    {jobId: "G100401", position_name: "Angular Developer", description: "The Developer will be responsible for front-end development. The preferred skillsets are Angular9, TypeScript, JavaScript, HTML5, CSS3, Java, Spring Boot, and AWS.", requiredSkills: "Angular9, TypeScript, JavaScript, HTML5, CSS3", userDetails:{firstname: "Harshal", lastname: "Shah"},company: "Google", datePosted: "Feb 14 2021", location: "Palo Alto, California"},
                    {jobId: "R100786", position_name: "Backend Developer", description: "The Developer will be responsible for back-end development. The preferred skillsets are Java, Spring Boot, Spring JPA, Oracle and AWS.", requiredSkills: "Java, Spring Boot, Spring JPA, Oracle, AWS", userDetails:{firstname: "Harshal", lastname: "Shah"},company: "TSYS", datePosted: "Feb 13 2021", location: "Atlanta, Georgia"}],
            allJobs:''

        };
    }

    componentWillMount(){
        if(!this.props.isAuthentic){
            this.props.history.push('/login');
        }
    }

    componentDidMount(){

    }


    // Method to display all the jobs 
    display_jobs()
    {
        const {jobs} = this.state;
        const item = jobs.map((job,index) =>{

            return(
                <div className="container-fluid small">
                        <div className="row">
                            <div className="col-sm-2 border gridFont">{(job.jobId)}</div>
                            <div className="col-sm-3 border">
                                <button className = "btn btn-link gridFont"
                                        onClick={() => {
                                            this.props.jobdetails(job);
                                            this.props.history.push("/jobdetails");
                                        }}> {job.position_name}</button></div>
                            <div className="col-sm-3 border gridFont">{job.requiredSkills}</div>
                            <div className="col-sm-2 border gridFont">{job.company}</div>
                            <div className="col-sm-2 border gridFont">{job.datePosted}</div>
                        </div>
                </div>

            )
        });

       return(
           <div className="font-weight-bold">
               <div className="container-fluid bg-light ">
                   <div className="row text-center">
                       <div className="col-sm-2 border ">Job Id</div>
                       <div className="col-sm-3 border">Position</div>
                       <div className="col-sm-3 border">Required Skills</div>
                       <div className="col-sm-2 border">Company</div>
                       <div className="col-sm-2 border">Posted On</div>
                   </div>
               </div>
               {item}
           </div>
       )
    }

    render(){
        return(
            <div>
                <br/>
                <h3>Current Open Positions</h3>
                <br/>
                {this.display_jobs()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        jobdetails : (data) => dispatch(jobdetails(data)),
        userdetails : (data) => dispatch(userdetails(data))
    };
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {
        isAuthentic: state.actionReducer.isAuthentic,
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllPositions));