import { createStore } from "redux"

const initalState = {
    user: '123'
}

const authService = (state = initalState, action) => {
    return state
}
const store = createStore(authService)
export default store