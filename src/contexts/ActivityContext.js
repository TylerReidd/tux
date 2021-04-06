import React, {createContext, useState, useEffect} from 'react';
import { HeuristicsSampleData } from '../SampleData/HeuristicsSampleData';



export const ActivityContext = createContext();

const ActivityContextProvider = ({children}) => {
  const [activityData, setActivityData] = useState(HeuristicsSampleData);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);



// Not sure what this is doing yet
  const getActivityData = async () => {
    return await activityService.getOne(props.activityId);
  };

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []); 


  return (
    <ActivityContext.Provider value={{activityData, started, finished}}>
      {/* Do I need to use props here? Or just children? */}
      {children}
    </ActivityContext.Provider>
  )
}

export default ActivityContextProvider;