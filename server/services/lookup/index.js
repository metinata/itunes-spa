import axios from 'axios'
import { api } from '../../config'

const lookup = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(api.endpoints.lookup, {
            params: query
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export default lookup