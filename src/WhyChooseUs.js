import wcu1 from './assets/WCU1.png'
import wcu2 from './assets/WCU2.png'
import wcu3 from './assets/WCU3.png'

const WhyChooseUs = () => {
    return (
        <div className="whyChooseUs">
            <h1>Why <span>Choose</span> Us</h1>
            <div className="wcuti">
                <img src={wcu1} alt="Quick Cash" width='700' className='wcuimage'/>
                <div className='wculine'></div>
                <div className='wcutext'>
                    <h1>Quick <span>Cash</span></h1>
                    <p>We do not believe in go and come.<br />
                    Get paid the same day you bring your car.</p>
                </div>
            </div>
            <div className="wcuti">
                <div className='wcutext'>
                    <h1>Buy <span>Back</span> Guarantee</h1>
                    <p>Having second thoughts after selling, don't fuss<br />
                    You can take back your vehicle up to three months after selling.<br /> T & C applied</p>
                </div>
                <div className='wculine wculine2'></div>
                <img src={wcu2} alt="Quick Cash" width='600' className='wcuimage2'/>
            </div>
            <div className="wcuti">
                <img src={wcu3} alt="Quick Cash" width='700' className='wcuimage'/>
                <div className='wculine'></div>
                <div className='wcutext'>
                    <h1>Unbeatable <span>Offer</span></h1>
                    <p>We offer the very best rates in Accra.<br />
                    Don't believe us, come and see for yourself</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs