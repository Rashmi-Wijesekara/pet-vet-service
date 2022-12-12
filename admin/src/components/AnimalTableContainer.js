import React from "react";

function AnimalTableContainer() {
  return (
    <div>
      <div className="animalTableContainer">
        <table id="animals">
          <tr>
            <th id="animalType">Animal Type</th>
            <th>Breed</th>
          </tr>
          <tr>
            <td id="animalType">Dogs</td>
            <td>
              german shepherd,bulldog,labrador retriever,golden retriever,
              french bullgod,siberian husky,poodle,alaskan
              malamute,chihuahua,border collie,afgan hound,airedale terrier
            </td>
          </tr>
          <tr>
            <td>Cats</td>
            <td>
              persian cat,maine coon cat,ragdoll cat,birman cat,scottish fold
              cat,sphynx cat,siamese cat,savannah cat,himalayan cat,selkirk rex
              cat,abyssinian cat,oriental shorthair cat,british shorthair
              cat,singapura cat,bengal cat,snowshoe cat,sokoke cat
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AnimalTableContainer;
