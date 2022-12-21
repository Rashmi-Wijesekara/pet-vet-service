import React from "react";

function AnimalTableContainer(props) {
  const headings = props.headings;
  const data = props.data;
  return (
    <div>
      <div className="animalTableContainer">
        <table id="animals">
          <thead>
            <tr>
              {headings.map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dataObj) => {
              return (
                <tr key={dataObj}>
                  {Object.keys(dataObj).map((key) => (
                    <td key={key}>{dataObj[key]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AnimalTableContainer;
