import {AUTH_ACTION} from "../constants/ActionTypes";

export const initialState:IUserDetails = {
    userName: "Maksym",
    balance: 0,
    basket: 0,
    curse: "0|0",
    reserves: 0
};

export const commonReduser= (state:IUserDetails = initialState, action: IAction)=>{
    if (action.type = AUTH_ACTION){
        return {
            ...state,
            auth: action.payload
        }
    }
    return state
};