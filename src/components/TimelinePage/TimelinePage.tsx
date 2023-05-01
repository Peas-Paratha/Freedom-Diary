import React from "react";
import Timeline from "./Timeline/Timeline";
import EventDetails from "./EventDetails/EventDetails";

const TimelinePage = () => {
  return (
    <div className="relative">
      <Timeline />
      <EventDetails />
    </div>
  );
};

export default TimelinePage;
