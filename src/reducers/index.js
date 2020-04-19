import {combineReducers} from 'redux';
import PostReducers from './postsReducer';

    export default combineReducers({
        posts : PostReducers
    })