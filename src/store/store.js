
import { combineReducers,createStore } from "redux"
import counterReducer from "./reducers/counterReducer";
import authReducer from "./reducers/authReducer"

const rootReducer= combineReducers({
    counter:counterReducer,
    auth:authReducer
})

const store= createStore(rootReducer);
export default store;