import React from 'react';
import './department-collection.styles.scss';



const DepartmentCollection = () => (
    <div>
        <div className="container">

            <div className="title">
                <h4>Departments</h4>
            </div>

            <div className="row ">

                <div className="col s12 m6 l4 ">
                    <div className="card">
                        Doves Funeral Services
                        <div className="progress">
                            <div className="progress-done" data-done="90">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4 ">
                    <div className="card">
                    Doves Funeral Services
                        <div className="progress">
                            <div className="progress-done" data-done="90">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4 ">
                    <div className="card">
                    Doves Funeral Services
                        <div className="progress">
                            <div className="progress-done" data-done="90">
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

);




export default DepartmentCollection;

