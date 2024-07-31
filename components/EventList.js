import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, onSelectEvent, selectedEvents }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          onSelectEvent={onSelectEvent}
          isSelected={selectedEvents.some(e => e.id === event.id)}
        />
      ))}
    </div>
  );
};

export default EventList;
