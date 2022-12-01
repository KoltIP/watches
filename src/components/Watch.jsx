import React from 'react';
import classes from '../styles/Watch.css';

const Watch = (props) => {

    let watch = props.watch;
    return(  
        <>            
            <div className='watch'>
                <div className="close">
                    <i className="fas fa-times"></i>
                </div>
                <label>{watch.name}</label>
                <input value = {watch.time} />
            </div>
        </>
    )    
}
export default Watch;