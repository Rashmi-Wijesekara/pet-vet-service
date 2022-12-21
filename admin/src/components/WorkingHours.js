import React from "react";

function WorkingHours() {
  return (
    <div className="workingHoursCardContainer">
      <text className="workingHoursTxt">
        Working Hours<br></br>
      </text>
      <text className="openHours">Clinic opens at</text>
      <input type="time" id="openHours" name="openHours"></input>

      <text className="closeHour">Clinic closes at</text>
      <input type="time" id="closeHour" name="closeHour"></input>
      <hr id="line"></hr>

      <text className="specialDaysTxt">
        On special days
        <form action="" id="date">
          <label for="Date">Date:</label>
          <input type="date" name="date"></input>
        </form>
        <text className="specialopenHours">Clinic opens at</text>
        <input type="time" id="specialOpenHours" name="openHours"></input>
        <text className="specialcloseHour">Clinic closes at</text>
        <input type="time" id="specialCloseHour" name="closeHour"></input>
      </text>
      <button id="btnSave">Save</button>
    </div>
  );
}

export default WorkingHours;
