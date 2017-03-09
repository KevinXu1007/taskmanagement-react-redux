import { combineReducers } from 'redux';
import taskReducer from './taskReducer';


const rootReducer = combineReducers({
    taskList: taskReducer
});

export default rootReducer;

