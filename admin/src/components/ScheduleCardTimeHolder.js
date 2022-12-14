import React from "react";

function ScheduleCardTimeHolder(props) {
  return (
    <div>
      <div className="scheduleCardTimeHolder">
        <text id="time">{props.time}</text>
      </div>
    </div>
  );
}

export default ScheduleCardTimeHolder;
