import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import TableContainer from "./components/TableContainer";

function App() {
  return (
      <div>
          <Header />
          <SearchBox/>
          {/* <TreatingPatientCard/>
      <WorkingHours/>  */}
          <TableContainer/>
          {/* <ScheduleCard/>  */}
          <Footer />
      </div>
  );
}

export default App;
