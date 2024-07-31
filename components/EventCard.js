import React from 'react';

const EventCard = ({ event, onSelectEvent, isSelected }) => {
  return (
    <div className="event-card">
      <h3>{event.event_name}</h3>
      <p>Category: {event.event_category}</p>
      <p>Timing: {new Date(event.start_time).toLocaleString()} - {new Date(event.end_time).toLocaleString()}</p>
      <button onClick={() => onSelectEvent(event)} disabled={isSelected}>
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
};

export default EventCard;
