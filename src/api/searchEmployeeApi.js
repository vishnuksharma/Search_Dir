import axios from 'axios';

const apiRoute = 'http://api.additivasia.io/api/v1/assignment/employees';
const ENDPOINTS = {
    getEmployeeUrl: (searchQuery) => `${apiRoute}/${searchQuery}`,
}

export const getEmployee = (payload) => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.getEmployeeUrl(payload))
        .then(res => {
            resolve(res.data);
        })
        .catch(error => {
            reject(error);
        })
    })
    
}