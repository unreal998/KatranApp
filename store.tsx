import {createStore} from "redux";
import reducers from "./reducers";
import {commonReduser} from "./reducers/commonReduser";

const store = createStore(commonReduser);

export default store;