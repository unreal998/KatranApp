import {AUTH_ACTION} from "../constants/ActionTypes";

const defaultUserState: IUserDetails = {
  userName: "Maks",
  balance: 200,
  basket: 5,
  reserves: 5,
  curse: "26/25"
};

export function authAction(data) {
    if (data) {
        return ({
            type: AUTH_ACTION,
            payload: {defaultUserState}
        })
    }
    else {
        return ({
            type: AUTH_ACTION,
            payload: {defaultUserState}
        })
    }
}