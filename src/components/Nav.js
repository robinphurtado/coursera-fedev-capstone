
import '../App.css';
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='main-nav'>
      <img src={logo} alt="Little Lemon Logo"/>
      <ul>
        <li><Link to ="/">HOME</Link></li>
        <li><Link to ="/about">ABOUT</Link></li>
        <li><Link to ="/menu">MENU</Link></li>
        <li><Link to ="/bookings">RESERVATIONS</Link></li>
        <li><Link to ="/orderOnline">ORDER ONLINE</Link></li>
        <li><Link to ="/login">LOGIN</Link></li>
      </ul>

    </nav>
  );
}

export default Nav;
