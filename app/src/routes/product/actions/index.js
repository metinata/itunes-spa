import * as service from '../../../service'
import actionTypes from './types'

const lookup = (query) => (dispatch, state) => {
    service.lookup(query)
        .then(response => {
            dispatch({
                type: actionTypes.LOOKUP,
                payload: response.data
            });
        });
}

const reset = () => (dispatch, state) => {
    dispatch({
        type: actionTypes.RESET,
        payload: {}
    })
}

export default {
    lookup,
    reset
}