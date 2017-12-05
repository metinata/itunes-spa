import actionTypes from '../actions/types'

const categories = {
    app: {
        results: []
    },
    music: {
        results: []
    },
    movie: {
        results: []
    },
    tv: {
        results: []
    },
    book: {
        results: []
    },
    mac: {
        results: []
    },
    podcast: {
        results: []
    }
};

const initialState = {
    all: { ...categories, found: false },
    search: { ...categories }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUBLIC_SEARCH:
            return { ...state, all: action.payload, search: initialState.search }
        case actionTypes.PARTIAL_SEARCH:
            return { ...state, search: action.payload }
        case actionTypes.LOOKUP:
            return { ...state, lookup: action.payload }
        case actionTypes.RESET:
            return { ...initialState }
        default:
            return state
    }
}