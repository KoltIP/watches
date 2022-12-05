import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';


const Page = () => {
    let timeout;
    const [watches,setWatches] = useState([]);

    const addTimer=(watches)=>{     
        console.log(watches);  
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

    // useEffect(() => {
    //     const timeout = setTimeout(() => console.log(watches), 1000);
    //     return () => clearTimeout(timeout);
    //   }, []);


    useEffect(() => {
        clearInterval(timeout)
        timeout = setInterval(() => addTimer(watches), 1000);
        //return () => clearInterval(timeout);
      }, [watches]);
    
    return(  
        <>
            <AddWatchMenu action={addWatch} />
            <WatchesList watches = {watches} action = {(watch) => deleteWatch(watch)}/>
        </>
    )    
}
export default Page;