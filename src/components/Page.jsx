import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';


const Page = () => {

    const [watches,setWathces] = useState([]);

    const addTimer=()=>{
        let copy = watches;
        for (let i=0;i<watches.length;i++)
        {
            if (copy[i].s>58)
            {
                if (copy[i].mm >58)
                {
                    copy[i].s = 0;
                    copy[i].mm =0;
                    copy[i].hh = Number(copy[i].hh) +1;
                }
                else
                {
                    copy[i].s = Number(0);
                    copy[i].mm = Number(copy[i].mm) + 1;
                }
            }
            else
                copy[i].s = Number(copy[i].s) + 1 ;                      
        }
        setWathces(copy);  
    }



    useEffect(() => {
        const interval = setInterval(() => {
          addTimer()
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    //Вместо стейта, внутри которого массив, сделай массив из стейтов
    

    // const addTimer=(item)=>{
    //     let copy = item;
    //     copy.id = setInterval(() => {
    //         if (copy.s>58)
    //         {
    //             if (copy.mm >58)
    //             {
    //                 copy.s = 0;
    //                 copy.mm =0;
    //                 copy.hh = Number(copy.hh) +1;
    //             }
    //             else
    //             {
    //                 copy.s = Number(0);
    //                 copy.mm = Number(copy.mm) + 1;
    //             }
    //         }
    //         else
    //             copy.s = Number(copy.s) + 1 ;
    //         setWathces([...watches, copy]);
    //       }, 1000);
      
    //       return () => {
    //         clearInterval(copy.id);
    //       };
    // }
    

    const addWatch = (watchName, watchTime) => {
        let timeMass = watchTime.split(':');
        let timerId = 0;
        let item = {
        name : watchName,
        hh : timeMass[0],
        mm : timeMass[1],
        s : timeMass[2],
        timerId : timerId}
        setWathces([...watches, item]);
    }

    const deleteWatch = (watch) => {
        clearInterval(watch.id);
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