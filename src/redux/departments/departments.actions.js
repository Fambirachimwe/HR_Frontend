const fetchAction = (departments) =>{
    return {
        type: 'fetch',
        departments: departments
    }
}

export default fetchAction