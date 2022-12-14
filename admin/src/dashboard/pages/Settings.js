import React from "react";

import Navbar from "../../shared/components/Navbar";
import Header from "../../components/Header";

import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../components/Footer";
import TreatingPatientCard from "../../components/TreatingPatientCard";
import WorkingHours from "../../components/WorkingHours";
import AnimalTableContainer from "../../components/AnimalTableContainer";
import { ANIMAL_BREED_DATA } from "../../sampleData";

const Settings = () => {
  return (
    <Router>
      <div className="flex flex-row">
        <Navbar path="/settings" />
        <Header />
        <TreatingPatientCard />
        <WorkingHours />
        <AnimalTableContainer
          headings={ANIMAL_BREED_DATA.HEADINGS}
          data={ANIMAL_BREED_DATA.DATA}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default Settings;