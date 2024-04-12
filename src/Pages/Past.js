import React from 'react';
import '../Pages/Past.css';
import Gallery from './Gallery';
import event1 from '../Pages/img/1.jpeg';
import event2 from '../Pages/img/2.jpeg';

const Past = () => {
  const events = [
    { image: event1, date: "11th March 2023" },
    { image: event2, date: "11th March 2023" },
    // Add more events as needed
  ];

  return (
    <div className="containers">
      <div className="past" id='past'>
        <h2>Past Events</h2>
        <section id="past-events" className="event-box">
          {events.map((event, index) => (
            <div className="event" key={index}>
              <img src={event.image} alt="" />
              <p>{event.date}</p>
            </div>
          ))}
        </section>
      </div>
      <Gallery />
    </div>
  );
};

export default Past;
