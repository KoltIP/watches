import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';
import { render } from '@testing-library/react';
import Watch from './Watch';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const Page = () => {
    let timeout = 0;
    let mass = [];
    const [watches,setWatches] = useState([]);

    const addTimer=()=>{    
        // timeout = setTimeout(() => {
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
            //console.log(copy);
            return copy;          
        // },1000);
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
 
    useEffect(() => {

                    const timerId = setInterval(()=>
                    {
                        if (watches.length!==0)
                        {
                            let mass = watches;
                            for (let i=0;i<watches.length;i++)
                                mass[i].s = Number(mass[i].s) + 1;
                            setWatches(mass);                         
                            console.log(watches);
                        }
                    },1000);
                    

                    return () => {   clearInterval(timerId);     }
                }
            );
    

    return(  
        <>
            <AddWatchMenu action={addWatch} />
            <WatchesList watches = {watches} action = {(watch) => deleteWatch(watch)}/>
        </>
    )    
}
export default Page;