import { useLocation } from 'react-router-dom'
import { FaCircleCheck } from 'react-icons/fa6'
import { FaTimesCircle } from 'react-icons/fa'
import PDFDownload from './PDFDownload';

const CarEligibilityResult = () => {

    const location = useLocation();
    const { carOk, userID, fullName, phoneNumber } = location.state
    const userData = {fullName, phoneNumber, userID}
    return (
        <div className="CarEligibilityResult" style={{margin:'20rem 0'}}>
            {carOk ? 
            <div className='happyguy'>
                <h1><FaCircleCheck style={{color: '#00FF00'}}/> Your car meets our <span>requirement</span>, you can now bring it down for final inspection. Your approval id is <span>{userID}</span></h1>
                <PDFDownload userData={userData} />
            </div> :
            <div className='sadguy'>
                <h1><FaTimesCircle style={{color: '#FF0000'}}/> Unfortunately, your car <span>doesn't</span> meet our requirements. We cannot proceed further at this point</h1>
            </div>}
        </div>
    )
}

export default CarEligibilityResult