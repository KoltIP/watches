import React from 'react';
import Watch from '../components/Watch';
import classes from '../styles/Watches.css';

const WatchesList = (props) => {

    const watches = props.watches;
    const action = props.action;

    return(  
       <div className='box'>
            {(watches === undefined) || (watches.length === 0) || (watches === null)
            ?
            <span>Здесь пока пусто</span>
            :
            watches.map((watch,index)=> 
            <div key={index}>                
                <Watch watch={watch} action={action}/>
            </div>)
            }
       </div>
    )    
}
export default WatchesList;