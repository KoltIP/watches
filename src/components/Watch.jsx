import React from 'react';
import classes from '../styles/Watch.css';

const Watch = (props) => {

    let watch = props.watch;
    let time = watch.h + ":" + watch.m + ":" + watch.s;
    const action = props.action

    const Delete = () => {
        action(watch);
    }

    const Nothing = () => {

    }

    
    return(  
        <>             
            <div className='watch'>
                <div className="close" onClick={Delete}></div>
                <label className='item'>{watch.name}</label>
                <input className='item' value = {time} onChange={Nothing}/>
            </div>
        </>
    )    
}
export default Watch;