import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';


const Page = () => {
    let timeout = 0;
    const [watches,setWatches] = useState([]);
    const [loading,setLoading] = useState(false);

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
                        setLoading(!loading);
                        if (watches.length!==0)
                        {
                            let copy = watches;
                            for (let i=0;i<copy.length;i++)
                            {
                                if (copy[i].s<59)
                                {
                                    copy[i].s = Number(copy[i].s) +1;
                                    if (copy[i].s<10)
                                    copy[i].s = "0" + copy[i].s; 
                                }
                                else if (copy[i].m<59)
                                {
                                    copy[i].s = "00";
                                    copy[i].m = (Number(copy[i].m) +1);
                                    if (copy[i]<10)
                                        copy[i].m = "0" + copy[i].m; 
                                }
                                else if (copy[i].h<23)
                                {
                                    copy[i].s ="00";
                                    copy[i].m = "00";
                                    copy[i].h = Number(copy[i].h) +1;
                                    if (copy[i].h<10)
                                        copy[i].h ="0"+copy[i].h ;
                                }
                                else
                                {
                                    copy[i].s = "00";
                                    copy[i].m ="00";
                                    copy[i].h = "00";
                                }
                            }    
                            setWatches(copy);   
                            setLoading(!loading);    
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