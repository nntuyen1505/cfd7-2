import { createStore, combineReducers, applyMiddleware } from "redux"
import authReducer from "./reducer/authReducer"
import courseReducer from "./reducer/courseReducer"

const allReducer = combineReducers({
    auth: authReducer,
    course: courseReducer
})

const thunk = store => next => action => {
    // next(action)
    if (typeof action === 'function') {
        action(store.dispatch)
    } else {
        next(action)
    }
}

const store = createStore(
    allReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store