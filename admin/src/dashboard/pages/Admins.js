import Header from "../../components/Header";
import Navbar from "../../shared/components/Navbar";
import TableContainer from "../../components/TableContainer";
import AdminAddForm from "../../shared/components/AdminAddForm";
import { ADMINS_DATA } from "../../sampleData";
import SearchBox from "../../components/SearchBox";
import Admin  from "../components/AdminIncharge";
import Footer from "../../components/Footer";
import {
	BrowserRouter as Router,
} from "react-router-dom";


const Admins = () => {
	


	return (
		<Router>
		<div className="flex flex-row">
      <Header />
			<Navbar path="/admins" />
		
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
                <div className="flex flex-row mt-40">

                    <div className="flex-row grow px-1 mb-40">
						
                      <TableContainer
                        headings={ADMINS_DATA.HEADINGS}
                        data={ADMINS_DATA.DATA}
                      />

					          </div>
					
					          <div className="flex-col items-center justify-items-center mb-40">
						
						          <Admin />
						          <AdminAddForm />
                      			  <SearchBox />

					          </div>
					
				        </div>			
			</div>

			
			
		</div>

	
			<Footer />
		
		
		</Router>
	);
};

export default Admins;