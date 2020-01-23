import axios from 'axios';
// import axiosCancel from 'axios-cancel';

const initState = {
    departments: []
}

const rootReducer = (state = initState, action) => {
    
    if(action.type === 'fetch'){
        return {
            ...state,
            departments: [...state.departments, action.departments]
        }
    }
    
}

const fetch = (departments) =>{
    return {
        type: 'fetch',
        departments: departments
    }
}

export const FetchDepartment = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:4000/admin/department')
        .then(res => {
            const dpt = res.data.response;
            dispatch(fetch(dpt))
        })
    }
}





export default rootReducer;