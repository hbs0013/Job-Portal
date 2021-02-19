const defaultState = {
    isLoggedIn: false,
    message: "",
    userId: "",
    userDetails: "",
    isAuthentic: false
}


// Reducer to manage all login/logout actions.
export default function actionReducer (state = defaultState, action) {
    const newState = {...state};

        switch (action.type)
        {
            case 'LOGIN_SUCCESS':
            newState.isLoggedIn = true;
            newState.message = "Login successful";
            newState.userId = action.payload.userId;
            newState.userDetails = action.payload.userDetails;
            newState.isAuthentic = true;
            console.log("UserDetails" +  newState.userDetails)
           return newState;


        case 'LOGIN_ERROR':
            newState.isLoggedIn = false;
            newState.message = "The email and password you entered did not match our records. Please double-check and try again.";
            newState.userId = "";
            return newState;

        case 'logoutSuccess':
              newState.isLoggedIn = false;
              newState.isAuthentic= false;
              newState.message = "Logout successful";
              return newState;

        case 'logoutFailed':
              newState.isAuthentic= true;
              return newState;


        default:
            newState.isLoggedIn = false;
            newState.message = "";
            newState.userId = "";
            return newState;
    };
};
