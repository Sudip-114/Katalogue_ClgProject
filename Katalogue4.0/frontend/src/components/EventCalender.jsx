import React from 'react';

const EventCalendar = ({ calendarId }) => {
  // Google Calendar embed URL format: 
  // https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia/Kolkata

  const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
    calendarId
  )}&ctz=Asia/Kolkata`;

  return (
    <iframe
      title="Event Calendar"
      src={embedUrl}
      style={{ border: 0 }}
      width="100%"
      height="400"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

export default EventCalendar;
