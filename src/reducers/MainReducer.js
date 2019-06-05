import {combineReducers} from "redux";
import {TrackListReducer} from './TrackListReducer';
import {PlayerReducer} from "./PlayerReducer";

export default combineReducers({
    tracks : TrackListReducer,
    player : PlayerReducer
});