import React from 'react';
import classes from '../styles/Watch.css';

const Watch = (props) => {

    let watch = props.watch;

    const action = props.action

    const Delete = () => {
        action(watch);
    }

    
    return(  
        <>             
            <div className='watch'>
                <div className="close" onClick={Delete}></div>
                <label className='item'>{watch.name}</label>
                <input className='item' value = {watch.time} />
            </div>
        </>
    )    
}
export default Watch;