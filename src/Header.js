import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Header = ({ isOpen, setIsOpen, toggleMenu }) => {
    const logoWidth = 70
    const logoHeight = 70
    return (
        <header className='header'>
            <div className='headerDesktop'>
                    <div>
                    <img src={logo} alt="logo" width={logoWidth} height={logoHeight} />
                </div>
                <nav className='bigScreenView'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/brands'>Brands</Link></li>
                    </ul>
                </nav>
                <Link to='/checkcareligibility' className='bigScreenView'>
                    <button className='headerButton'>
                        Check Car Eligibility
                    </button>
                </Link>
                <button className='hamburgerMenu' style={{
                    background : 'none',
                    border : 'none',
                    padding : 0,
                    cursor : 'pointer',
                    color : 'inherit'
                }} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {isOpen && 
                    <ul className='headerMobile'>
                        <li><Link to='/' onClick={toggleMenu} style={{color:'#000'}}>Home</Link></li>
                        <li><Link to='/about' onClick={toggleMenu} style={{color:'#000'}}>About</Link></li>
                        <li><Link to='/brands' onClick={toggleMenu} style={{color:'#000'}}>Brands</Link></li>
                    </ul>}
        </header>
    )
}

export default Header