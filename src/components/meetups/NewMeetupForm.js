import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm (props){
  const titleRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const submitHandling = (e) => {
    e.preventDefault();

    const data = {
      title: titleRef.current.value,
      address: addressRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
    }
    props.onAddMeetup(data);
  }
  
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandling}>
        <div className={classes.control}>
          <label htmlFor='title'>title</label>
          <input type="text" id="title" required ref={titleRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>address</label>
          <input type="text" id="address" required ref={addressRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>image</label>
          <input type="url" id="image" required ref={imageRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>description</label>
          <textarea id="description" rows='5' required ref={descriptionRef} />
        </div>

        <div className={classes.actions}>
          <button type='submit'>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;