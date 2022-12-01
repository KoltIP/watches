import React, {useState} from 'react';
import AddWatchMenu from './AddWatchMenu';
import WatchesList from '../components/WatchesList';


const Page = () => {

    const [watches,setWathces] = useState([]);

    const addWatch = (watchName, watchTime) => {
        let item = {
        name : watchName,
        time : watchTime
        }
        setWathces([...watches, item]);
        console.log(watches);
    }

    return(  
        <>
            <AddWatchMenu action={addWatch} />
            <WatchesList watches = {watches} />
        </>
    )    
}
export default Page;