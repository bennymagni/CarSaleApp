import hiwImage from './assets/hiwImage1.png'
import { Link } from 'react-router-dom'

const HowItWorks = () =>{
    return (
        <section className="howItWorks">
            <h1>How It <span>Works?</span></h1>
            <div className='hiwTextImage'>
                <img src={hiwImage} alt="nice guy buying car" width='431' height='600'/>
                <div className='hiwTParent'>
                    <div className='hiwText'>
                        <h1>Take Eligibility Test</h1>
                        <p>Click the 'Check Car Eligibility' button to take the eligibility test. <br />This  will let us know whether your car meets our requirements</p>
                    </div>
                    <div className='hiwText'>
                        <h1>Fill out the Form</h1>
                        <p>Answer all questions on the form as honestly as possible.<br />When you're done, submit the form</p>
                    </div>
                    <div className='hiwText'>
                        <h1>Receive Feedback</h1>
                        <p>If your Car meets our requirement, bring it to our office<br /> along with your approval Form/code and claim your cash!<br /> 
                           If it fails to meet our standards, unfortunately, <br />we can't accept it, 
                           however you're welcome to try with another car</p>
                    </div>
                    
                </div>
            </div>
            <Link to='/checkcareligibility'>
                <button className='headerButton hiwButton'>
                    Check Car Eligibility
                </button>
            </Link>
            
        </section>
    )
}

export default HowItWorks