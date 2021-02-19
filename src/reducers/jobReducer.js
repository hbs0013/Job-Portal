import {JOB_DETAILS} from "./../actions/index"

const defaultState = {
    isJobAdded: false,
    message: "",
    jobId : ""
}

// Reducer for job/user related actions.
export default function jobReducer (state = defaultState, action) {
    const newState = {...state};

    switch (action.type)
    {
        case JOB_DETAILS:
            newState.currentjobdetails = action.data;
            return newState;

        case 'USER_DETAILS':
            newState.selecteduserDetails = action.data;
            return newState;

        default:
            newState.isJobAdded = false;
            newState.message = "";
            newState.jobId = "";
            return newState;
    };
};