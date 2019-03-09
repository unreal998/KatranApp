import {AUTH_ACTION} from "../constants/ActionTypes";

const  initialState:IUserDetails = {
    userName: "userName",
    balance: 0,
    basket: 0,
    curse: "0|0",
    reserves: 0
};

export const commonReduser= (state:IUserDetails = initialState, action: IAction)=>{
    if (action.type = AUTH_ACTION){
        return action.payload
    }
    return state
};