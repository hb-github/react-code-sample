import { actionTypes } from "../common/constants/actionTypes";


// Initiallizing state default to any is model is unknown

//Exporting selectedPollReducer
export const selectedPollReducer = (state: any = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_POLL:
            return handleState(state, action.payload);
    }
    return state;
};

//Handling state
const handleState = (state: any, payload: any): any => {
    return payload;
};
