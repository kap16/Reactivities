import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState
}) => {

  const initializeForm = () => {
    if (initialFormState){
      return initialFormState;
    } else {
      return {
        id: '',
        title:'',
        category:'',
        description:'',
        date:'',
        city:'',
        venue:''
      }
    }
  }

  const [activity, setAcitivity] = useState<IActivity>(initializeForm)

  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder='Title' value={activity.title}/>
        <Form.TextArea rows={2} placeholder='Description' value={activity.description}/>
        <Form.Input placeholder='Category' value={activity.category}/>
        <Form.Input type='Date' placeholder='Date' value={activity.date}/>
        <Form.Input placeholder='City' value={activity.city}/>
        <Form.Input placeholder='Venue' value={activity.venue}/>
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          onClick={() => setEditMode(false)}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  )
}

export default ActivityForm
