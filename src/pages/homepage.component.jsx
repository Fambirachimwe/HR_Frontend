import React from 'react';
import DepartmentCollection from '../components/department-collection/department-collection.component';
// import KeyIssues from '../components/keyIssues-collection/keyIssues-collection.component';
import KeyIsuesCollection from '../components/keyIssues-collection/keyIssues-collection.component';

import './homepage.styles.scss';

import M from 'materialize-css/dist/js/materialize.min.js';



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
        
                <KeyIsuesCollection />
                
        
        
            </div>
        )
    }
    
    }


export default Homepage;


