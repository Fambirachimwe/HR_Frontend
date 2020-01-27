import { createSelector } from 'reselect';

const departmentSelector = state  =>  state.departments;


export const deparmentLabelNames = createSelector([departmentSelector], departments => {
    return [departments.name]
});




