import axios from 'axios';

const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))
const intialSate = {

}
const apiRoute = 'http://api.additivasia.io/api/v1/assignment/employees';
const ENDPOINTS = {
    getEmployeeUrl: (searchQuery) => `${apiRoute}/${searchQuery}`,
}

export const SearchDir = {
    state: intialSate,
    reducers: {
        updateEmployee(state, payload) {
            return payload
        }
    },
    effects: (dispatch) => ({
        async getEmployee(payload, state) {
            dispatch.SearchDir.updateEmployee(intialSate);
            axios.get(ENDPOINTS.getEmployeeUrl(payload))
            .then(res => {
                if (Object.keys(res.data).length){
                    dispatch.SearchDir.updateEmployee(res.data);
                } else {
                    dispatch.SearchDir.updateEmployee(intialSate); 
                }
            })
        }
    })
};
