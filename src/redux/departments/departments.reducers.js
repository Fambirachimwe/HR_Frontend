
//initial state

const initState = {
    departments : []
}


const rootReducer = (state = initState, action) => {
    if(action.type === 'fetch'){
        return {
            ...state,
            departments: [...state.departments, action.departments]
        }
    } else {
        return state
    }
}




export default rootReducer;

