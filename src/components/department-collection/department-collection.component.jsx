import React from 'react';
import './department-collection.styles.scss';
import DeparmentPreview from '../department-collection-preview/department-collection-preview.component';

import axios from 'axios';
// import axiosCancel from 'axios-cancel';  // cancelling multiple axios request

import { connect } from 'react-redux';


import fetchAction from '../../redux/departments/departments.actions';



class DepartmentCollection extends React.Component {

    componentDidMount() {

        axios.get('http://127.0.0.1:4000/admin/department')
            .then(res => {
                const dpt = res.data.response
                this.props.fetchDepartment(dpt)
            }
        )

    }


    render() {
        
        return (
            <div>
                <div className="container">

                    <div className="title">
                        <h4>Departments</h4>
                    </div>

                    <div className="row " >
                        <div >
                            {
                                this.props.departments.map(department => (
                                    <DeparmentPreview departments={department} key={() => this.props.departments.map(dpt => dpt._id)} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}



const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchDepartment: (department) => dispatch(fetchAction(department))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DepartmentCollection);

