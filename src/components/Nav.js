
import '../App.css';
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import '../components/Nav.css';


function Nav() {
  return (
    <nav className='main-nav'>
      <img src={logo} alt="Little Lemon Logo" className='header-logo'/>
      <ul>
        <li><Link to ="/" className='navlink'>HOME</Link></li>
        <li><Link to ="/about" className='navlink'>ABOUT</Link></li>
        <li><Link to ="/menu" className='navlink'>MENU</Link></li>
        <li><Link to ="/bookings" className='navlink'>RESERVATIONS</Link></li>
        <li><Link to ="/orderOnline" className='navlink'>ORDER ONLINE</Link></li>
        <li><Link to ="/login" className='navlink'>LOGIN</Link></li>
      </ul>

    </nav>
  );
}

export default Nav;
