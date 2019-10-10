import axios from 'axios';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE ='LOAD_FAILURE';

export const fetchData = () => (dispatch) => {
    dispatch({type: LOAD_DATA })
    axios
    .get('https://api.carbonintensity.org.uk/intensity/factors')
        .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data.data}))
        .catch(err => dispatch({ type: LOAD_FAILURE, payload: err.response}))
}


// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action);
//     }
//     else if (typeof action === 'function') {
//         action(store.dispatch)
//     }
// }