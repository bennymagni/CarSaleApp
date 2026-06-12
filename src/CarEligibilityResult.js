import { useLocation } from 'react-router-dom'
import happyguy from './assets/happpyguy.png'
import sadguy from './assets/sadguy.jpg'

const CarEligibilityResult = () => {

    const location = useLocation();
    const { carOk } = location.state
    return (
        <div className="CarEligibilityResult">
            {carOk ? 
            <div className='happyguy'>
                <img src={happyguy} alt={happyguy.split('/').pop().split('.')[0]} width='632' height='421'/>
                <h1>Yay!!, Your car meets our requirement, you can now bring it down for final inspection</h1>
            </div> :
            <div className='sadguy'>
                <img src={sadguy} alt={sadguy.split('/').pop().split('.')[0]} width='307' height='410'/>
                <h1>Unfortunately, your car <span>doesn't</span> meet our requirements. We cannot proceed further at this point</h1>
            </div>}
        </div>
    )
}

export default CarEligibilityResult