import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from "./Login";
import Message from "./Message";
import Signup from "./Signup";
import SetProfile from "./SetProfile";
import Dashboard from "./Dashboard";
import Navbarmain from "./Navbarmain";
import Jobdetails from "./Jobdetails";
import AllPositions from "./AllPositions";
import MainPage from "./MainPage";

class HomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };


    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <MainPage/>
                )}/>

                <Route exact path="/mainpage" render={() => (
                    <div>
                        <MainPage/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/homepage" render={() => (
                    <div>
                        <HomePage />
                    </div>
                )}/>

                <Route exact path="/setprofile" render={() => (
                    <div>
                        <SetProfile />
                    </div>
                )}/>

                <Route exact path="/allopenpositions" render={() => (
                    <div>
                        <AllPositions />
                    </div>
                )}/>

                <Route exact path="/dashboard" render={() => (
                    <div>
                        <Dashboard />
                    </div>
                )}/>
                <Route exact path="/navbar" render={() => (
                    <div>
                        <Navbarmain />
                    </div>
                )}/>
                <Route exact path="/jobdetails" render={() => (
                    <div>
                        <Jobdetails />
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(HomePage);