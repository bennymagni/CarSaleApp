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
  const [model, setModel] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [hiddenFaults, setHiddenFaults] = useState('');
  const [faultDescription, setFaultDescription] = useState('');
  
  const approvedCars = ['toyota', 'hyundai', 'honda', 'kia']
  //const b  = [['corolla', 'camry', 'rav4', 'hiace'], ['elantra', 'sonata', 'tucson', 'h-1'], ['civic', 'accord', 'cr-v'], ['cerato', 'sportage']]
  const bestModels = ['corolla', 'elantra', 'civic', 'cerato']
  const midSizeSedan = ['camry', 'accord', 'sonata']
  const compactSUV = ['rav4', 'crv', 'sportage', 'tucson']
  const commercialV = ['hiace', 'h-1']
  const testmanufactureYear = isNaN(parseInt(manufactureYear)) ? 2000 : parseInt(manufactureYear);
  const testEngineCapacity = isNaN(parseInt(engineCapacity)) ? 5 : parseInt(engineCapacity);
  const testMileage = isNaN(parseInt(mileage)) ? 250000 : parseInt(mileage);
  let carOk = false;

  const navigate = useNavigate();

  const submitData = async (e) => {
      e.preventDefault();
      //const url = 'http://localhost:5000';
      const vehicleData = {
        carBrand,
        manufactureYear,
        mileage,
        model,
        registrationYear,
        engineCapacity,
        hiddenFaults,
        faultDescription
      }

      function testCar () {
          if (approvedCars.includes(carBrand.toLowerCase()) && testMileage < 180000 && testEngineCapacity >= 1.3 && testEngineCapacity <= 2.5){
            if (bestModels.includes(model.toLowerCase()) && (testmanufactureYear >= 2012 && testmanufactureYear <= 2019)){
              carOk = true; 
            }
            if (midSizeSedan.includes(model.toLowerCase()) && (testmanufactureYear >= 2010 && testmanufactureYear <= 2018)){
              carOk = true;
            }
            if (compactSUV.includes(model.toLowerCase()) && (testmanufactureYear >= 2012 && testmanufactureYear <= 2018)){
              carOk = true;
            }
            if (commercialV.includes(model.toLowerCase()) && (testmanufactureYear >= 2012)){
              carOk = true;
            } 
          } else {
            carOk = false;
            console.log('it is either mileage, engine capacity or brand')
          }

            
      }

      try {
        //const result = await axios.post(url, vehicleData);
        //console.log(`Data sent Successfully ${result.data}`);
        
        //const isToyota = (vehicleData.carBrand).toLowerCase() === 'toyota';
        await testCar();
        
        navigate('/CarEligibilityResult', {state: {carOk}});
      } catch (error) {
        console.error(`Data not sent ${error.message}`);
      } finally {
        console.log(vehicleData);
        setCarBrand('');
        setMileage('');
        setManufactureYear('');
        setMileage('');
        setModel('');
        setRegistrationYear('');
        setEngineCapacity('');
        setHiddenFaults('');
        setFaultDescription('');
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
                            model={model}
                            setModel = {setModel}
                            registrationYear={registrationYear}
                            setRegistrationYear={setRegistrationYear}
                            engineCapacity={engineCapacity}
                            setEngineCapacity={setEngineCapacity}
                            hiddenFaults={hiddenFaults}
                            setHiddenFaults={setHiddenFaults}
                            faultDescription={faultDescription}
                            setFaultDescription={setFaultDescription}
                            />}>
        </Route>
        <Route path="/CarEligibilityResult" element={<CarEligibilityResult />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
