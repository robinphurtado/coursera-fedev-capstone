
import '../App.css';
import './Footer.css';
import MarioAdrian from '../assets/images/Mario and Adrian A.jpg'

function Footer() {
  return (
    <section className='footer'>
      <img src={MarioAdrian} alt="Mario and Adrian"/>
      <div className='link-section' >
        <ul className='list-column-doormat'>
          <p>Doormat Navigation</p>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>

        <ul className='list-column'>
          <p>Contact</p>
          <li>Address</li>
          <li>phone number</li>
          <li>email</li>
        </ul>

        <ul className='list-column' >
          <p>Social Media Links</p>
          <li>Address</li>
          <li>phone number</li>
          <li>email</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
