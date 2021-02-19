import React, {Component} from 'react';
import "./../styles/general.css";
import {connect} from "react-redux";
import AllPositions from "./AllPositions"
import Navbarmain from "./Navbarmain";

class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            view:"jobs"

        };
    }
    render(){
        return(
            <div>
                <Navbarmain/>
                <AllPositions/>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {
        userId: state.actionReducer.userId
    }
}


export default connect(mapStateToProps)(dashboard);