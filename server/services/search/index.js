import axios from 'axios'
import { api } from '../../config'

const search = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(api.endpoints.search, {
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

export default search