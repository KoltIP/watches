import React, {useState} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';
import moment from 'moment';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const Page = () => {

    moment.locale();  

    const [watches,setWathces] = useState([]);

    const addTimer=(watch)=>{
        let copy = watches.find(x => watch.name === x.name);
        console.log(watches);
        if (copy !== undefined && copy !== null)
        {
            console.log(copy);
            let sTime = copy.time;
            let aTime = sTime.substring(0,sTime.length-3).split(':');
            aTime[0] = '0' + aTime[0];
            let date = (new Date(0, 0, 0,aTime[0], aTime[1], aTime[2],0));
            let updatedSec = date.getSeconds + 3;
            if (updatedSec>55)
                updatedSec =0;
            date.setSeconds(updatedSec);        
            console.log(date);    
            copy.time = moment(date).format('LTS');
            setWathces(watches.filter(p=>p!==watch));
            setWathces([...watches,copy]);
        }     
    }

    const addWatch = (watchName, watchTime) => {

        let timeMass = watchTime.split(':');
        let time = (new Date(0, 0, 0,timeMass[0], timeMass[1], timeMass[2],0));
        time = moment(time).format('LTS');    

        let timerId = 0;

        let item = {
        name : watchName,
        time : time,
        timerId : timerId}

        item.timerId = setInterval(() => addTimer(item), 3000);

        setWathces([...watches, item]);
    }

    const deleteWatch = (watch) => {
        setWathces(watches.filter(p=>p!==watch));
    }

    return(  
        <>
            <AddWatchMenu action={addWatch} />
            <WatchesList watches = {watches} action = {(watch) => deleteWatch(watch)}/>
        </>
    )    
}
export default Page;