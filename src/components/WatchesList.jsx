import React from 'react';
import Watch from '../components/Watch';
import classes from '../styles/Watches.css';

const WatchesList = (props) => {

    const watches = props.watches;

    return(  
       <div className='box'>
            {watches === undefined
            ?
            <span>Здесь пока пусто</span>
            :
            watches.map((watch,index)=> 
            <div>                
                <Watch watch={watch} key={index} />
            </div>)
            }
       </div>
    )    
}
export default WatchesList;