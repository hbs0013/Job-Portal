import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./../styles/general.css";
import LogoImage from "./LogoImage";
import {Link, withRouter} from "react-router-dom";
import {setProfile} from "../actions";
import ReactDOM from 'react-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class SetProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileData: {
                userId: localStorage.getItem('userId'),
                firstname: '',
                lastname: '',
                email: '',
                phonenumber: '',
                aboutme: '',
                profileFile: '',
                userSkilstring: '',
                userskills: ''
            },
            isProfileFile:true,
            isName:true,
            isEmail:true,
            isPhonenumner:true,
            isAboutMe:true,
            isSkills:true,
            skills:[],
            isSetProfile : false,
            messageProfile : "",
            isFirstnameEmpty:'',
            isLastnameEmpty:''
        };
    }

    // To validate user name
    validateName() {
        if (this.state.profileData.firstname != '' && this.state.profileData.lastname != '')
        {
            return (true)
        }
        return (false)
    }

    //To validate email
    validateEmail() {
        var emailId = this.state.profileData.email;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))
        {
            return (true)
        }
        return (false)
    }

    validatePhonenumber() {
        // Todo validation for phonenumber
        if(this.state.profileData.phonenumber) {
            return (true)
        }
    }

    // to validate user details
    validateAboutMe() {
        if (this.state.profileData.aboutme != '')
        {
            return (true)
        }
        return (false)
    }

    // To validate user skills
    validateSkills(){
        if (this.state.profileData.userskills.length > 1)
        {
            return (true)
        }
        return (false)
    }

    handleChange = (e) => {
        alert(e.target.value)
    }

    handleFileUpload = (event) => {
        const payload = new FormData();
        payload.append('myfile', event.target.files[0]);
    };

    validateForm(){

    }

    // To handle profile setup on set my profile btn click
    handleSetProfile = () => {
        if(this.validateName() == true) {
            if(this.validateEmail() == true) {
                if(this.validatePhonenumber() == true) {
                    if(this.validateAboutMe() == true) {
                        var user = {
                            "userId":localStorage.getItem('userId'),
                            "firstname" : this.state.profileData.firstname,
                            "lastname": this.state.profileData.lastname,
                            "email": this.state.profileData.email,
                            "phone" : this.state.profileData.phonenumber,
                            "prof_headline": this.state.profileData.aboutme,
                            "userskills": "JavaScript, HTML",
                            "profilepicpath":"genericdoc.docx"
                        }
                        console.log("user ********* : " + JSON.stringify(user));
                        this.props.dispatch(this.props.setProfile(user));
                    }
                    else{
                        this.setState({isAboutMe: false})
                    }
                }
                else{
                    this.setState({isPhonenumner: false})
                }
            }
            else{
                this.setState({isEmail: false})
            }
        }
        else {
            this.setState({isName: false})
        }
    }

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    componentWillReceiveProps(nextProps){
        console.log("inside component will render");
        if (nextProps.isSetProfile === true) {
            nextProps.history.push('/dashboard');
         }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-7 noBorder">
                        <Link to = "/mainpage"><LogoImage className="image"/></Link>
                        <br/>
                        <div className="text-left">
                        <h1 className="">Welcome to freelancer</h1>
                            <p><h5>Please setup your profile.</h5></p>
                        <br/>
                        </div>
                        <div className="text-left">
                            <h6 className="">PROFILE IMAGE</h6>
                            { this.state.isProfileFile ? null : <div className="text-input-error-wrapper text-left errormessage">Please Add Your Profile Image.</div>}
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="file" id="file" name="file"
                                    label="profilepic"
                                    onChange={this.handleFileUpload}
                                />
                            </div>
                            <br/>
                        </div>
                        <div className="text-left">
                            <h6 className="">FULL NAME</h6>
                            { this.state.isName ? null : <div className="text-input-error-wrapper text-left errormessage">Please Enter Full Name.</div>}
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control"
                                           placeholder="First name"
                                           label="firstname"
                                           required
                                           value={this.state.profileData.firstname}
                                           onChange={(event) => {
                                           this.setState({
                                               profileData: {
                                               ...this.state.profileData,
                                               firstname: event.target.value
                                           }
                                           });
                                           }}
                                           onFocus={(event) => {
                                               this.setState({isName: true});
                                           }}
                                    />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name"
                                           label="lastname"
                                           value={this.state.profileData.lastname}
                                           required
                                           onChange={(event) => {
                                               this.setState({
                                                   profileData: {
                                                       ...this.state.profileData,
                                                       lastname: event.target.value
                                                   }
                                               });
                                           }}
                                           onFocus={(event) => {
                                               this.setState({isName: true});
                                           }}
                                    />
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="text-left">
                            <h6 className="">EMAIL</h6>
                            { this.state.isEmail ? null : <div className="text-input-error-wrapper text-left errormessage">Please Enter Valid Email Address.</div>}
                            <div className="form-group">
                                <input
                                className="form-control"
                                type="text"
                                label="email"
                                required
                                placeholder="e.g. Build me a website"
                                value={this.state.profileData.email}
                                onChange={(event) => {
                                this.setState({
                                    profileData: {
                                ...this.state.profileData,
                                email: event.target.value
                                }
                                });
                                }}
                                onFocus={(event) => {
                                    this.setState({isEmail: true});
                                }}
                                />
                            </div>
                            <br/>
                        </div>
                        <div className="text-left">
                            <h6 className="">PHONE NO</h6>
                            { this.state.isPhonenumner ? null : <div className="text-input-error-wrapper text-left errormessage">Please Enter Valid PhoneNumber.</div>}
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    required
                                    label="phonenumber"
                                    placeholder="e.g. Build me a website"
                                    value={this.state.profileData.phonenumber}
                                    onChange={(event) => {
                                        this.setState({
                                            profileData: {
                                                ...this.state.profileData,
                                                phonenumber: event.target.value
                                            }
                                        });
                                    }}
                                    onFocus={(event) => {
                                        this.setState({isPhonenumner: true});
                                    }}
                                />
                            </div>
                            <br/>
                        </div>
                        <div className="text-left">
                            <h6 className="">About Me</h6>
                            { this.state.isAboutMe ? null : <div className="text-input-error-wrapper text-left errormessage">Please Enter You Bio.</div>}
                            <div className="form-group">
                                <textarea rows="3"
                                          className="form-control"
                                          type="textarea"
                                          label="aboutme"
                                          placeholder="describe yourself here..."
                                          required
                                          value={this.state.profileData.aboutme}
                                          onChange={(event) => {
                                              this.setState({
                                                  profileData: {
                                                      ...this.state.profileData,
                                                      aboutme: event.target.value
                                                  }
                                              });
                                          }}
                                          onFocus={(event) => {
                                              this.setState({isAboutMe: true});
                                          }}
                                />
                            </div>
                            <br/>
                        </div>
                        <div className="text-left">
                            <h4 className="">Skills</h4>
                            { this.state.isSkills ? null : <div className="text-input-error-wrapper text-left errormessage">Please enter atleast 3 skills.</div>}
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Skills"
                                    placeholder="skills"
                                    value={this.state.skills}
                                    onChange={(event) => {
                                        this.setState({
                                            profileData: {
                                                ...this.state.profileData,
                                                phonenumber: event.target.value
                                            }
                                        });
                                    }}
                                    onFocus={(event) => {
                                        this.setState({isSkills: true});
                                    }}
                                />
                        </div>
                        </div>
                        <div className="text-left">
                            <button
                                className="btn btn-primary font-weight-bold"
                                type="button"
                                onClick={() => {this.handleSetProfile()}}>
                                Set My Profile
                            </button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    console.log("mapDispatchToProps");
    let actions = {setProfile};
    return { ...actions, dispatch };
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {
        userId: state.signUpReducer.userId,
        isSetProfile: state.signUpReducer.isSetProfile,
        messageProfile: state.signUpReducer.messageProfile
    }
}
export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(SetProfile));