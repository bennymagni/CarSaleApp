import { Link } from 'react-router-dom'
import logo from './assets/logo.png'

const Header = () => {
    const logoWidth = 70
    const logoHeight = 70
    return (
        <header className='header'>
            <div>
                <img src={logo} alt="logo" width={logoWidth} height={logoHeight} />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/brands'>Brands</Link></li>
                </ul>
            </nav>
            <Link to='/checkcareligibility'>
                <button className='headerButton'>
                    Check Car Eligibility
                </button>
            </Link>
        </header>
    )
}

export default Header