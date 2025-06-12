
import '../App.css';
import MarioAdrian from '../assets/images/Mario and Adrian A.jpg'

function Footer() {
  return (
    <footer className='main-footer'>
      <img src={MarioAdrian} alt="Mario and Adrian"/>
      <ul>
        <p>Doormat Navigation</p>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>

       <ul>
        <p>Contact</p>
        <li>Address</li>
        <li>phone number</li>
        <li>email</li>
      </ul>

      <ul>
        <p>Social Media Links</p>
        <li>Address</li>
        <li>phone number</li>
        <li>email</li>
      </ul>
    </footer>
  );
}

export default Footer;
