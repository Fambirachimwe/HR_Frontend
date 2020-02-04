import { createSelector } from 'reselect';

const departmentSelector = state  =>  state.departments;  // input  selector 



export const DeparmentLabelNamesSelector = createSelector([departmentSelector], departments => {
    return departments.map(dept => {
        return dept
    })
});


export const KeyIssuesSelector = createSelector([departmentSelector], departments => {
    return departments.map(dept => {
        
        return dept.map(x => {
            return (({_id, name, cp, lg, fp}) => ({_id, name, cp, lg, fp}))(x)
        })
        
    });
})






