import axios from 'axios'

const api = {
    search: 'http://localhost:3000/api/search',
    lookup: 'http://localhost:3000/api/lookup'
};

export const search = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(api.search, {
            params: query
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    }); 
};

export const lookup = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(api.lookup, {
            params: query
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    }); 
};