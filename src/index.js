import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { bugAdded, bugAssignedToUser, bugResolved, getBugsByUser, getUnresolvedBugs } from './store/bugs';
import configureStore from './store/configureStore';
import * as projects from './store/projects';
import { userAdded } from './store/users';

const store = configureStore()

// store subscribe
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState())
})

// add user
store.dispatch(userAdded({ name: "User 1"}))
store.dispatch(userAdded({ name: "User 2"}))
// add bug
store.dispatch(bugAdded({ description: "Bug 1"}))
store.dispatch(bugAdded({ description: "Bug 2"}))
store.dispatch(bugAdded({ description: "Bug 3"}))
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1}))
store.dispatch(bugResolved({ id: 1 }))

// get unresolved bugs
const unresolvedBugs = getUnresolvedBugs(store.getState())
const bugsByUser = getBugsByUser(1)(store.getState())
console.log(unresolvedBugs)
console.log(bugsByUser)

// add project
store.dispatch(projects.projectAdded({ name: 'kichu ekta'}) )

unsubscribe()

// // remove bug
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1
//   }
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
