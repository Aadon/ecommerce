import hero from '../images/bg1.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-red-300 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
    <div className="container mx-auto flex justify-around h-full">
      <div className="flex flex-col justify-center">
        <div className="font-semibold flex items-center uppercase">
          <div className="w-12 h-[2px] bg-red-500 mr-3"></div>New Trends
        </div>

        <h1 className='text-[70px] leading-[1.1] font-light mb-4'
        >
          AUTUMN SALE STYLISH <br /> 
          <span className='font-semibold'>WOMEN'S</span>
        </h1> 

        <Link 
        to={'/'}
        className='self-start uppercase font-semibold border-b-2 border-gray-400'
        >
          Discover More
        </Link>
      </div>
      <div className="hidden lg:block">
        <img src={hero} alt="" />
      </div>
    </div>
    </section>
  );
}

export default Hero;