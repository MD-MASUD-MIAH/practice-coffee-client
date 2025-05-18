import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import foot from '../assets/Rectangle18.png' 
import logo from '../assets/logo.png'
import { Link } from 'react-router';
const Footer = () => {
  return (
    <footer
      className="py-10 px-5 md:px-20 text-[#331A15]"
      style={{
        backgroundImage: `url(${foot})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <img src={logo} alt="Logo" className="mb-3 w-16 h-16" />
          <h2 className="text-2xl font-bold mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Espresso Emporium
          </h2>
          <p className="mb-4 max-w-md">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-4 mb-5 text-xl">
            <FaFacebook className="hover:text-[#331A15] cursor-pointer" />
            <FaTwitter className="hover:text-[#331A15] cursor-pointer" />
            <FaInstagram className="hover:text-[#331A15] cursor-pointer" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.15)' }}>
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <HiOutlinePhone /> +88 015 000 000 00
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail /> hossainmasood@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker /> 72, Wall street, Shibchar Road, Madaripur
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Connect with Us
          </h3>
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea placeholder="Message" className="textarea textarea-bordered w-full h-24" />
            <button className="btn btn-outline text-[#331A15] border-[#331A15] hover:bg-[#331A15] hover:text-white w-fit">
              Send Message
            </button>
            <Link to={'/alluser'} className="btn btn-outline text-[#331A15] border-[#331A15] hover:bg-[#331A15] hover:text-white w-fit">
              User List
            </Link>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
