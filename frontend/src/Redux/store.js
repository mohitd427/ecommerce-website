import { reducer as Appreducer } from "./Appreducer/reducer";
// import { reducer as Authreducer } from "./Auth/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunks from "redux-thunk";
// combineReducers({ Appreducer, Authreducer });
const rootReducer = Appreducer

const store = legacy_createStore(rootReducer, applyMiddleware(thunks));
//console.log(store.getState());
export { store };
