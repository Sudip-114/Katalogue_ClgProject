import React from 'react';
import EventMap from './EventMap';
import EventCalendar from './EventCalendar';

const EventPost = ({ event }) => {
  return (
    <div className="event-post">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {new Date(event.date).toLocaleString()}
      </p>
      <EventMap eventLocation={event.location} />
      {/* Use your KIIT or event Google Calendar ID below */}
      <EventCalendar calendarId={event.calendarId || 'your_calendar_id_here'} />
    </div>
  );
};

export default EventPost;
