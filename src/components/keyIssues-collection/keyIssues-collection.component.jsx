import React from 'react';
import './keyIssues-collection.styles.scss';

import { Bar } from 'react-chartjs-2';


const data = {
    labels: ['test', 'test', 'test'],
    datasets: [
        {
            label: 'Financial perspective',
            backgroundColor: '#2146eb',
            borderColor: '#2146eb',
            data: [22, 33, 56]
        },


    ]
}



const KeyIsuesCollection = () => (
    <div className="container">

        <div className="title">
            <h4>Key Issues</h4>
        </div>

        <div className="row">
            <div className="col s12 m6 l6">
                <div className="card cta">
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

            <div className="col s12 m6 l6">
                <div className="card cta">
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

            <div className="col s12 m6 l6">
                <div className="card cta">
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

            <div className="col s12 m6 l6">
                <div className="card cta">
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
        </div>
    </div>
);

export default KeyIsuesCollection;

