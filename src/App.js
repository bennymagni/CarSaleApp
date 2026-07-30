import Header from "./Header";
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom";
import About from "./About";
import Home from './Home';
import Brands from "./Brands";
import CheckCarEligibility from "./CheckCarEligibility";
import CarEligibilityResult from "./CarEligibilityResult";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "./uploadImage";
import DisplayData from "./displayData";
import axios from "axios";
import DisplayDataMain from "./DisplayDataMain";

function App() {

  const [carBrand, setCarBrand] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [model, setModel] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [hiddenFaults, setHiddenFaults] = useState('');
  const [faultDescription, setFaultDescription] = useState('');
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const fileRef = useRef(null)
  
  const approvedCars = ['toyota', 'hyundai', 'honda', 'kia']
  //const b  = [['corolla', 'camry', 'rav4', 'hiace'], ['elantra', 'sonata', 'tucson', 'h-1'], ['civic', 'accord', 'cr-v'], ['cerato', 'sportage']]
  const bestModels = ['corolla', 'elantra', 'civic', 'cerato']
  const midSizeSedan = ['camry', 'accord', 'sonata']
  const compactSUV = ['rav4', 'crv', 'sportage', 'tucson']
  const commercialV = ['hiace', 'h-1']
  const testmanufactureYear = isNaN(parseInt(manufactureYear)) ? 2000 : parseInt(manufactureYear);
  const testEngineCapacity = isNaN(parseInt(engineCapacity)) ? 5 : parseFloat(engineCapacity);
  const testMileage = isNaN(parseInt(mileage)) ? 250000 : parseInt(mileage);
  let carOk = false;
  let status;

  const [carData, setCarData] = useState([]);
  useEffect(() => {
    getCarVehicleData();
  }, [])
  const navigate = useNavigate();

  const getCarVehicleData = async () => {
    try {
      const result = await axios.get('https://car-sale-app-backend.vercel.app/userdata');
      setCarData(result.data)
    } catch (error) {
      console.log(error);
    }

  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const submitData = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      const url = 'https://car-sale-app-backend.vercel.app/userdata';
      if (!file) return alert('You need to upload a file');

      const payload = new FormData();

      payload.append('imageUploaded', file)
      

      const vehicleData = {
        fullName,
        phoneNumber,
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
        testCar();
        
        if (carOk === true){
          status = 'Eligible'
        } else {
          status = 'Ineligible'
        }

        vehicleData.status = status
        for(let i = 0; i < Object.keys(vehicleData).length; i++){
          payload.append(Object.keys(vehicleData)[i], Object.values(vehicleData)[i])
        }
        //const isToyota = (vehicleData.carBrand).toLowerCase() === 'toyota';
        
        const response = await axios.post(url, payload);
        
        const { userID, fullName, phoneNumber } = response.data
          
        navigate('/CarEligibilityResult', {state: {carOk, userID, fullName, phoneNumber}});

      } catch (error) {
        console.error(`Data not sent ${error.message}`);
      } finally {
        setCarBrand('');
        setMileage('');
        setManufactureYear('');
        setModel('');
        setRegistrationYear('');
        setEngineCapacity('');
        setHiddenFaults('');
        setFaultDescription('');
        setFile(null);
        setFullName('');
        setPhoneNumber('');
        if (fileRef.current){
            fileRef.current.value = '';
        }
        setIsSubmitting(false)
      }
  }

  const handleUpload = async () => {
    if (!file) return alert('You need to upload a file');

    const payload = new FormData();

    payload.append('imageUploaded', file)

    try {
      const response = await axios.post('https://car-sale-app-backend.vercel.app/uploadImage', payload);
      console.log("Success: ", response.data);
      setFile(null);
      fileRef.current.value = '';
    } catch (error) {
      console.error("Error: ", error)
    } 
  }

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu}/>
      {<Routes>
        <Route path="userdata" element={<DisplayDataMain carData={carData} />}></Route>
        <Route path="/getuserdata" element={<DisplayData userData={carData}/>}></Route>
        <Route path="/uploadImage" element={<UploadImage file={file} setFile={setFile} handleUpload={handleUpload} fileRef={fileRef}/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/checkcareligibility" 
              element={<CheckCarEligibility
                            fileRef={fileRef}
                            file={file} 
                            setFile={setFile} 
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
                            fullName = {fullName}
                            setFullName={setFullName}
                            phoneNumber = {phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            isSubmitting={isSubmitting}
                            setIsSubmitting = {setIsSubmitting}
                            />}>
        </Route>
        <Route path="/CarEligibilityResult" element={<CarEligibilityResult />}></Route>
      </Routes> }
      <Footer />
    </div>
  );
}

export default App;
