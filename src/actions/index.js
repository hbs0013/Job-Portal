export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const  LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
const AUTHENTICATED_USERS = [{email: 'testuser1@gmail.com', password: 'test_user1'}];

export function authenticateUser(userData) {
    return function (dispatch) {
        AUTHENTICATED_USERS.forEach(userCred => {
            if (userCred.email === userData.email && userCred.password === userData.password) {
                dispatch({type: "LOGIN_SUCCESS", payload: {userId: userData.email,userDetails: ''}});
            } else {
                dispatch({type: "LOGIN_ERROR"});
            }
        });
    }
}

export function registerUser(userData) {
    return function (dispatch) {
        if(userData) {
            dispatch({type: "SIGNUP_SUCCESS", payload: {userData}});
        } else {
            dispatch({type: "SIGNUP_ERROR"});
        }
    }
}

export function setProfile(profileData){
    console.log("Inside setProfile");
    return function (dispatch) {
        if (profileData){
            dispatch({type: "PROFILE_SUCCESS"});
        } else {
            dispatch({type: "PROFILE_FAILURE"})
        }
        
    }
}


export function requestLogout(state){
    return function (dispatch) {
        if(state) {
            dispatch({type:"logoutSuccess"});
        } else {
            dispatch({type:"logoutFailed"});
        }
    }
}


export const JOB_DETAILS='JOB_DETAILS';

export function jobdetails(data) {
    return {
        type: 'JOB_DETAILS',
        data,
    };
}

// users details
export const USER_DETAILS='USER_DETAILS';

export function userdetails(data) {
    return {
        type: 'USER_DETAILS',
        data,
    };
}



