import React from 'react';
import './department-collection-preview.styles.scss';




const DeparmentPreview = ({departments}) => (

    <div>
        {
            departments.map(dpt => (
                
                <div className='col s12 m6 l4' key={dpt._id }>

                    <div className="card" >
                        {dpt.name}
                        <div className="progress">
                            <div className="progress-done" data-done="90">
                            </div>
                        </div>
                    </div>
                </div>

             )) 
        }
    </div>  


);

export default DeparmentPreview;

