import { COURSE_DETAIL, HOME } from "../type"

const initialState = {
    data: {},
    loading: true,
}
const courseReducer = (state = initialState, action) => {

    switch (action.type) {
        case HOME:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case COURSE_DETAIL:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
    }

    return state
}
export default courseReducer