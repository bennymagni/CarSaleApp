import { Link } from "react-router-dom"
const Hero = () => {
    return(
        <section className="hero">
            <h1>Car For Cash!</h1>
            <p>Swap your car for real cash!</p>
            <p>Check whether your car meets our requirements now</p>
            <Link to='/checkcareligibility'>
                <button className="heroButton">Check Car Eligibility</button>
            </Link>
        </section>
    )
}

export default Hero