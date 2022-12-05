import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';
import { render } from '@testing-library/react';


const Page = () => {
    let timeout = 0;
    const [watches,setWatches] = useState([]);

    const addTimer=()=>{   
        clearTimeout(timeout); 
        timeout = setTimeout(() => {
        if (watches.length ===0)
            return ;
            let copy = watches;
            for (let i=0;i<copy.length;i++)
            {
                if (copy[i].s<=59)
                    copy[i].s = Number(copy[i].s) +1;
                else if (copy[i].m<=59)
                {
                    copy[i].s = Number(0);
                    copy[i].m = Number(copy[i].m) +1;
                }
                else if (copy[i].h<=24)
                {
                    copy[i].s = Number(0);
                    copy[i].m = Number(0);
                    copy[i].h = Number(copy[i].h) +1;
                }
                else
                {
                    copy[i].s = Number(0);
                    copy[i].m = Number(0);
                    copy[i].h = Number(0);
                }
            }
            setWatches(copy);            
        },1000);
    }

    const addWatch = (watchName, watchTime) => {
        clearTimeout(timeout); 
        let massTime = watchTime.split(":");
        let item = {
        name : watchName,
        s:massTime[2],
        m:massTime[1],
        h:massTime[0]
        }
        setWatches([...watches, item]);
        clearTimeout(timeout);
        
    }

    const deleteWatch = (watch) => {  
        clearTimeout(timeout);     
        setWatches(watches.filter(p=>p!==watch));
        clearTimeout(timeout);
    }

    // useEffect(() => {
    //     const timeout = setInterval(() => addTimer(watches), 1000);
    //     return () => clearInterval(timeout);
    //   });   
   

    useEffect(() => addTimer);
    

    return(  
        <>
            <AddWatchMenu action={addWatch} />
            <WatchesList watches = {watches} action = {(watch) => deleteWatch(watch)}/>
        </>
    )    
}
export default Page;