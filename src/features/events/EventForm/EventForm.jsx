import React, { Component } from 'react'
import { Form, Button, Segment } from 'semantic-ui-react';

class EventForm extends Component {
    state={
        title:'',
        date:'',
        city:'',
        venue:'',
        hosted:''
    }
    componentDidMount(){
        if(this.props.selectedEvent!=null){
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }
 
    handleformSubmit=(evt)=>{
      evt.preventDefault();
      
      if(this.state.id)
{
    this.props.updateEvent(this.state)
}    //   console.log(this.refs.firstname.value);
else{
    this.props.createEvent(this.state)
}
   
    
    }
    handleInputChange=({target:{value,name}})=>{
    this.setState({[name]:value})
    }
    render() {
        const {cancelFormOpen} = this.props;
        const {title,date,city,hostedBy,venue} = this.state;
        console.log(cancelFormOpen);
        return (
            <div>
                      <Segment>
                        <Form onSubmit={this.handleformSubmit}>
                          <Form.Field>
                            <label>Event Title</label>
                            <input autoComplete="off" ref="firstname" name="title" value={title} onChange={this.handleInputChange} placeholder="First Name" />
                          </Form.Field>
                          <Form.Field>
                            <label>Event Date</label>
                            <input autoComplete="off"   name="date"  value={date}   type="date" onChange={this.handleInputChange} placeholder="Event Date" />
                          </Form.Field>
                          <Form.Field>
                            <label>City</label>
                            <input autoComplete="off"  name="city" value={city}  onChange={this.handleInputChange} placeholder="City event is taking place" />
                          </Form.Field>
                          <Form.Field>
                            <label>Venue</label>
                            <input autoComplete="off"  name="venue" value={venue} onChange={this.handleInputChange} placeholder="Enter the Venue of the event" />
                          </Form.Field>
                          <Form.Field>
                            <label>Hosted By</label>
                            <input autoComplete="off"  name="hosted" value={hostedBy} onChange={this.handleInputChange} placeholder="Enter the name of person hosting" />
                          </Form.Field>
                          <Button positive type="submit">
                            Submit
                          </Button>
                          <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                        </Form>
                      </Segment>
            </div>
        )
    }
}
export default EventForm;
