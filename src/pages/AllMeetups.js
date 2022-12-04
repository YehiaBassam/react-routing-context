import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups (){
  const [ newMeetups, setMeetups ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch("https://react-routing-form-default-rtdb.firebaseio.com/meetups.json")
    .then(res => {
      return res.json()
    })
    .then(data => {
      const meetupsArray = []

      for (const key in data){
        meetupsArray.push({
          id: key,
          ...data[key]
        })
      }
      setMeetups(meetupsArray);
      setIsLoading(false);
    })
  }, [])

    if (isLoading)
      return <h1 style={{textAlign:"center"}}>Loading ...</h1>
    
    else 
      return <MeetupList meetups={newMeetups}/>
};

export default AllMeetups;
