import actionTypes from '../actions/types'

const initialState = {
    lookup: {
        results: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOOKUP:
            return { ...state, lookup: action.payload }
        case actionTypes.RESET:
            return { ...state, lookup: initialState.lookup }
        default:
            return state
    }
}