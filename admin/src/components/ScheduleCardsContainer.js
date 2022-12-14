import React from "react";
import ScheduleCard from "./ScheduleCard";
import ScheduleCardTimeHolder from "./ScheduleCardTimeHolder";
import ScheduleDate from "./ScheduleDate";

function ScheduleCardsContainer() {
  return (
    <div className="scheduleCardsContainer">
      <ScheduleCard />

      <ScheduleCardTimeHolder time="10.00 am" />
      <ScheduleDate />
      <ScheduleCard />
      <ScheduleCardTimeHolder time="10.15 am" />
      <ScheduleCard />
      <ScheduleCardTimeHolder time="10.30 am" />
      <ScheduleCard />
      <ScheduleCardTimeHolder time="10.45 am" />
    </div>
  );
}

export default ScheduleCardsContainer;
