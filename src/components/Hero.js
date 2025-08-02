
import '../App.css';
import '../components/Hero.css';
import { Link } from 'react-router-dom';
import restaurantFoodImage from '../assets/images/restauranfood.jpg';


const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='hero-content-text' >
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className='primary-button hero-primary-button'>
            Reserve a table
          </Link>
        </div>
        <div className='img hero-content-image'>
          <img
            src={restaurantFoodImage}
            alt="Restaurant food"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

