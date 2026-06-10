import Header from "./Header";
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom";
import About from "./About";
import Home from './Home';
import Brands from "./Brands";
import CheckCarEligibility from "./CheckCarEligibility";
import CarEligibilityResult from "./CarEligibilityResult";
import { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {

  const [carBrand, setCarBrand] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [mileage, setMileage] = useState('');


  const navigate = useNavigate();

  const submitData = async (e) => {
      e.preventDefault();
      //const url = 'http://localhost:5000';
      const vehicleData = {
        carBrand,
        manufactureYear,
        mileage
      }

      try {
        //const result = await axios.post(url, vehicleData);
        //console.log(`Data sent Successfully ${result.data}`);
        const isToyota = (vehicleData.carBrand).toLowerCase() === 'toyota';
        navigate('/CarEligibilityResult', {state: {isToyota}});
      } catch (error) {
        console.error(`Data not sent ${error.message}`);
      } finally {
        setCarBrand('');
        setMileage('');
        setManufactureYear('');
      }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/checkcareligibility" 
              element={<CheckCarEligibility 
                            carBrand={carBrand} 
                            setCarBrand={setCarBrand} 
                            submitData={submitData}
                            manufactureYear={manufactureYear}
                            setManufactureYear={setManufactureYear}
                            mileage={mileage}
                            setMileage={setMileage}
                            />}>

        </Route>
        <Route path="/CarEligibilityResult" element={<CarEligibilityResult />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
