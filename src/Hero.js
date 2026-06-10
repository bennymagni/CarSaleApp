import { Link } from "react-router-dom"
const Hero = () => {
    return(
        <section className="hero">
            <h1>Ready to sell your car? Start with the best!</h1>
            <p>Get real value for your car as quickly as possible!</p>
            <p>No extra charges, no hidden fees, no funny business, convert that car into real cash!</p>
            <p>Check whether your car meets our requirements now</p>
            <Link to='/checkcareligibility'>
                <button className="heroButton">Check Car Eligibility</button>
            </Link>
        </section>
    )
}

export default Hero