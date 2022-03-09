import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer";
import postReducer from "./postReducer";

const reducers = combineReducers({
    messagePage:messageReducer, 
    postPage:postReducer
})

const store = createStore(reducers)

export default store