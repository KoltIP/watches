import React from 'react';
import classes from '../styles/AddWatchMenu.css';

const AddWatchMenu = (props) => {

    const action = props.action;

    const Add=()=>{
        let name = document.getElementById("name").value;
        let time = document.getElementById("time").value;
        if (name===undefined || time===undefined)
            return;
        action(name,time);
    }

    return(  
       <div className='box'>
            <div className='column'>
                <label>Название</label>
                <input id="name"/>
            </div>
            <div className='column'>
                <label>Временная зона</label>
                <input id="time"/>
            </div>
            <button className='button' onClick={Add}>Добавить</button>

       </div>
    )    
}
export default AddWatchMenu;