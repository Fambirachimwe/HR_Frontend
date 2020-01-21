import React from 'react';
import DepartmentCollection from '../components/department-collection/department-collection.component';
// import KeyIssues from '../components/keyIssues-collection/keyIssues-collection.component';
import KeyIsuesCollection from '../components/keyIssues-collection/keyIssues-collection.component';

const Homepagepage = () => (
    <div className="homepage">
        <DepartmentCollection /> 

        <KeyIsuesCollection />
        
    </div>
);


export default Homepagepage;


