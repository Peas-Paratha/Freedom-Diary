import React, { useState } from "react";
import Timeline from "./Timeline/Timeline";
import EventDetails from "./EventDetails/EventDetails";

const TimelinePage = () => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const showDetails = () => {
    setDisplayDetails(true);
  };

  const hideDetails = () => {
    setDisplayDetails(false);
  };

  return (
    <div className="relative">
      <Timeline showDetails={showDetails} />
      <EventDetails hideDetails={hideDetails} displayDetails={displayDetails} />
    </div>
  );
};

export default TimelinePage;
