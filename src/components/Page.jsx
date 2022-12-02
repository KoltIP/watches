import React, {useState, useEffect} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';
import moment from 'moment';
import { computeHeadingLevel } from '@testing-library/react';

const Page = () => {

    moment.locale();  

    const [watches,setWathces] = useState([]);

    const addTimer=(item)=>{
        let copy = item;
        copy.id = setInterval(() => {
            //Вместо консоль лога менять значение секунд
            console.log("id:", copy.id);
            copy.s = Number(copy.s) + 1 ;
            setWathces([...watches, copy]);
          }, 1000);
      
          return () => {
            clearInterval(copy.id);
          };
    }

    // React.useEffect(() => {
    //     const id = setInterval(() => {
    //       console.log("id:", id);
    //       //setState((prevState) => prevState + 1);
    //     }, 1000);
    
    //     return () => {
    //       clearInterval(id);
    //     };
    //   }, []);


    const addWatch = (watchName, watchTime) => {
        let timeMass = watchTime.split(':');
        let timerId = 0;
        let item = {
        name : watchName,
        hh : timeMass[0],
        mm : timeMass[1],
        s : timeMass[2],
        timerId : timerId}
        addTimer(item);
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