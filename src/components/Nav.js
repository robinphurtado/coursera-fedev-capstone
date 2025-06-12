
import '../App.css';
import logo from '../assets/images/Logo.svg'

function Nav() {
  return (
    <nav className='main-nav'>
      <img src={logo} alt="Little Lemon Logo"/>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATIONS</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>

    </nav>
  );
}

export default Nav;
