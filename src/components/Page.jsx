import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';


const Page = () => {

    const [watches,setWatches] = useState([]);

    const addTimer=()=>{       
        if (watches.length ===0)
            return ;
            let copy = watches;
            for (let i=0;i<copy.length;i++)
            {
                copy[i].s = Number(copy[i].s) +1;
            }
            setWatches(copy);
    }

    const addWatch = (watchName, watchTime) => {

        let massTime = watchTime.split(":");

        let item = {
        name : watchName,
        s:massTime[2],
        m:massTime[1],
        h:massTime[0]
        }

        setWatches([...watches, item]);
    }

    const deleteWatch = (watch) => {
        setWatches(watches.filter(p=>p!==watch));
    }

      for(var i = setInterval(''); i >= 0; i--)
            clearInterval(i);  
        setInterval(()=>{addTimer()},1000);
      
    
    

    return(  
        <>
            <AddWatchMenu action={addWatch} />
            <WatchesList watches = {watches} action = {(watch) => deleteWatch(watch)}/>
        </>
    )    
}
export default Page;