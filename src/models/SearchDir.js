import axios from 'axios';

const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))
const intialSate = {risk: 0, review: 0, completed: 0}
export const SearchDir = {
    state: intialSate,
    reducers: {
        updateUser(state, payload) {
            return payload
        }
    },
    effects: (dispatch) => ({
        async getUser(payload, state) {
            dispatch.user.updateUser(intialSate); 
            await delay(1000)
            axios.post('/api/user', payload)
            .then(res => {
                if (Object.keys(res.data).length){
                    dispatch.user.updateUser(res.data);
                } else {
                    dispatch.user.updateUser(intialSate); 
                }
            })
        }
    })
};
