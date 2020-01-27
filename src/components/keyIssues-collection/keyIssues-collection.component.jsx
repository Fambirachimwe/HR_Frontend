import React from 'react';
import './keyIssues-collection.styles.scss';

import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';







class KeyIsuesCollection extends React.Component {


    // handleData = (labels, datasets) =>{
    //     return {
    //         labels: labels
    //     }
    // }

    
  

    render() {
        const data = {
            labels: ['DFS', 'DFA', 'Silkwood'],
            datasets: [
                {
                    label: 'Financial perspective',
                    backgroundColor: '#2146eb',
                    borderColor: '#2146eb',
                    data: [22, 33, 56]
                },
            ]
        }
        console.log(); // logging the state from the redux store
        
        const dpt = [...this.props.departments]
        // console.log(dpt[0]);
        

        return (
            
            
            <div className="container">

                <div className="title">
                    <h4>Key Issues</h4>
                </div>

                <div className="row">

                    {
                        dpt[0] === undefined ? (
                            dpt[0] = []
                        ) : (
                            dpt[0].map(department => {
                            
                            return (
                                <div className="col s12 m6 l6" key={department._id}>
                                    <div className="card cta" >
                                        <Bar
                                            data={data}
                                            width={1}
                                            height={5}
                                            options={{
                                                maintainAspectRatio: false
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                        )
                        
                        
                    }







                </div>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(KeyIsuesCollection);

