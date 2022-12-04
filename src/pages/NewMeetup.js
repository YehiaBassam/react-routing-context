import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup (){
  const navigate = useNavigate();

  const addMeetup = (meetupData) => {
    fetch("https://react-routing-form-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      "Content-Type": "application/json"
    })
    .then(() => {
      navigate('/')
    })
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetup}/>
  )
};

export default NewMeetup;
