import React from 'react';

const SelectedEvents = ({ events, onDeselectEvent }) => {
  return (
    <div className="selected-events">
      <h2>Selected Events</h2>
      {events.map(event => (
        <div key={event.id} className="selected-event-card">
          <h3>{event.event_name}</h3>
          <p>Category: {event.event_category}</p>
          <p>Timing: {new Date(event.start_time).toLocaleString()} - {new Date(event.end_time).toLocaleString()}</p>
          <button onClick={() => onDeselectEvent(event)}>Deselect</button>
        </div>
      ))}
    </div>
  );
};

export default SelectedEvents;
