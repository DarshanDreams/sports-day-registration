import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import SelectedEvents from './components/SelectedEvents';
import mockEvents from './mockEvents'; // Import mock data

const App = () => {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('selectedEvents'));
    if (savedEvents) {
      setSelectedEvents(savedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  const handleSelectEvent = (event) => {
    if (selectedEvents.length >= 3 || hasTimingConflict(event)) return;
    setSelectedEvents([...selectedEvents, event]);
  };

  const handleDeselectEvent = (event) => {
    setSelectedEvents(selectedEvents.filter(e => e.id !== event.id));
  };

  const hasTimingConflict = (newEvent) => {
    return selectedEvents.some(event => 
      (new Date(event.start_time) < new Date(newEvent.end_time)) && 
      (new Date(newEvent.start_time) < new Date(event.end_time))
    );
  };

  return (
    <div className="app">
      <EventList events={events} onSelectEvent={handleSelectEvent} selectedEvents={selectedEvents} />
      <SelectedEvents events={selectedEvents} onDeselectEvent={handleDeselectEvent} />
    </div>
  );
};

export default App;
