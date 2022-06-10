import { combineReducers } from "redux";
import bugsReducers from './bugs';
import projectsReducers from './projects';
import usersReducers from './users';


export default combineReducers({
    bugs: bugsReducers,
    projects: projectsReducers,
    users: usersReducers
})