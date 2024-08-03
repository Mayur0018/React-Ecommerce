import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import aboutImg from "../assets/abutimg.jpg";

function About() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-6 p-8">
      {/* Left Side: Text */}
      <div className="flex flex-col justify-center md:pr-8 p-4 md:p-6 bg-white rounded-lg shadow-none">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our e-commerce platform where we prioritize delivering exceptional products and services. 
          Our mission is to provide a seamless shopping experience while offering top-notch customer service.
          We value integrity, innovation, and excellence in everything we do.
        </p>
        <p className="text-lg text-gray-700">
          Our team is dedicated to ensuring your satisfaction and making your shopping experience memorable. 
          Thank you for choosing us for your online shopping needs.
        </p>
      </div>
      
      {/* Right Side: Image */}
      <div className="flex justify-center items-center p-4 md:p-6 bg-white rounded-lg shadow-none">
        <img 
          src={aboutImg} 
          alt="E-commerce" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      {/* Team Section */}
      <div className="col-span-full mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          <div className="bg-white p-6 rounded-lg shadow-none">
            <h4 className="text-xl font-semibold mb-2">Tom Cruise</h4>
            <p className="text-gray-600 mb-4">Co-Founder & CEO</p>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com/tomcruise" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-700 text-2xl" />
              </a>
              <a href="https://linkedin.com/in/tomcruise" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-700 text-2xl" />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-none">
            <h4 className="text-xl font-semibold mb-2">Emma Watson</h4>
            <p className="text-gray-600 mb-4">Marketing Director</p>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com/emmawatson" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-700 text-2xl" />
              </a>
              <a href="https://linkedin.com/in/emmawatson" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-700 text-2xl" />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-none">
            <h4 className="text-xl font-semibold mb-2">Will Smith</h4>
            <p className="text-gray-600 mb-4">Chief Technology Officer</p>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com/willsmith" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-700 text-2xl" />
              </a>
              <a href="https://linkedin.com/in/willsmith" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-700 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
