import { actionTypes } from "../common/constants/actionTypes";

export const selectedPollReducer = (state: any = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_POLL:
            return handleFetchMemberByIdCompleted(state, action.payload);
    }
    return state;
};
const handleFetchMemberByIdCompleted = (state: any, payload: any): any => {
    return payload;
};
