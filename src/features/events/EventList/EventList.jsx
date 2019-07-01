import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem';


 class EventList extends Component {
    
    render() {
        const {selectEvent}= this.props;
        return (
            <Fragment>
                {this.props.events.map(event => (
                <EventListItem selectEvent={selectEvent} key={event.id} event={event}/>
               ))}
               

                
            </Fragment>
        )
    }
}
export default EventList;
