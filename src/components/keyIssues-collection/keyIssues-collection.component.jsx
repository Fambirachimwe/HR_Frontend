import React from 'react';
import './keyIssues-collection.styles.scss';

import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';



class KeyIsuesCollection extends React.Component {

    data = () => {

        var arrInput = [].concat(...this.props.KeyIssues);

        var labels = arrInput.map(arr => {  
            return (({ name }) => ({ name }))(arr)
        });

        

        arrInput === undefined ? (
            arrInput = []
        ) : (
            labels = arrInput.map(arr => {
                return arr
                
            })
        )
        
        const dataSet = {
            labels: [...labels.map(obj => {return obj.name})],
            datasets: []
        };
        

        arrInput.map(arr => {
            
            
            const Obj = {
                label: arr.name,
                backgroundColor: '#2146eb',
                borderColor: '#2146eb',
                data: [22,242,22,22,22]
            }
            dataSet.datasets.push(Obj)
        })

        
        return dataSet;
      

    }

    render() {

       
        var keyIssues = this.props.KeyIssues;

        // console.log(this.data());

        

   
        
        
        return (
            
            
            <div className="container">

                <div className="title">
                    <h4>Key Issues</h4>
                </div>

                <div className="row">

                    {
                        keyIssues === undefined ? (
                            keyIssues = []
                        ) : (
                            keyIssues.map(keyIssue => {

                                return keyIssue.map(x => {
                                    return (
                                <div className="col s12 m6 l6" key={x._id}>
                                    <div className="card cta" >
                                        <Bar
                                            data={() => this.data()}
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

