import React from 'react';
import DepartmentCollection from '../components/department-collection/department-collection.component';
// import KeyIssues from '../components/keyIssues-collection/keyIssues-collection.component';
import KeyIsuesCollection from '../components/keyIssues-collection/keyIssues-collection.component';

import './homepage.styles.scss';

import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';


//  import the selectors 
import {DeparmentLabelNamesSelector, KeyIssuesSelector }  from '../redux/departments/department.selectors';




class Homepage extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var floatbtn = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(floatbtn, {});
            var elems = document.querySelectorAll('.sidenav');
            var instances1 = M.Sidenav.init(elems, {});
        });
    }



    render(){
        return (
            <div className="homepage">
                
                <nav>
                <div className="fixed-action-btn">
                <a href="#" data-target="slide-out" className="btn-floating btn-large waves-effect waves-light   sidenav-trigger"><i className="material-icons">menu</i></a> 
            </div>
                </nav>
    
            
               
        
                <ul id="slide-out" className="sidenav">
    
                    <li><a className="waves-effect" href="#!">Key Issues</a></li>
                    <li><a className="waves-effect" href="#!">Departments</a></li>
                    
                </ul>
        
                <DepartmentCollection />
        
                <KeyIsuesCollection KeyIssues={this.props.KeyIssues} />
                
        
        
            </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
        departments: state.departments,
        fromSelectors: DeparmentLabelNamesSelector(state),
        KeyIssues: KeyIssuesSelector(state)
        
        
    }
}



// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchDepartment: (department) => dispatch(fetchAction(department))
//     }
// }



export default connect(mapStateToProps)(Homepage);


