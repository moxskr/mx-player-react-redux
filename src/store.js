import {createStore, applyMiddleware} from "redux";
import MainReducer from './reducers/MainReducer';
import thunk from 'redux-thunk';

const store = createStore(MainReducer, applyMiddleware(thunk));

export default store;