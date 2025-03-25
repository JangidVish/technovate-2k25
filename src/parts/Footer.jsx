
import React, { useState } from 'react';

const Footer = ({ reference, scrollToSection }) => {
  const [email, setEmail] = useState("");
  const [activeLink, setActiveLink] = useState('home');

  const handleSubscribe = () => {
    if (email) {
      alert("You Will Get Notifications");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const handleEvent = (item) => {
    const linkMap = {
      Home: 'home',
      Event: 'events',
      Glimpse: 'glimpse'
    };
    
    const link = linkMap[item];
    if (link && reference && reference[link]) {
      handleSetActiveLink(link);
      scrollToSection(reference[link]);
      
      // Smooth scroll to top if we're at footer
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-purple-950 text-white py-10 px-6 mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Navigation Links */}
        <section>
          <h3 className="text-lg font-semibold text-gray-200">Explore</h3>
          <ul className="list-none space-y-2 text-gray-400">
            {["Home", "Event", "Glimpse"].map((item) => (
              <li 
                key={item} 
                onClick={() => handleEvent(item)} 
                className={`cursor-pointer hover:text-purple-300 transition ${
                  activeLink === item.toLowerCase() ? 'active' : ''
                }`}
              >
                {item.replace("_", " ")}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact & Subscription */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-200">Contact Us</h3>
          <p className="text-gray-400">Email: college@pccoer.in</p>
          <p className="text-gray-400 mb-4">Phone: +91 73683583</p>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-lg bg-purple-800 text-gray-200 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button 
            onClick={handleSubscribe} 
            className="w-full mt-3 bg-gradient-to-r from-purple-600 to-purple-400 px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Subscribe
          </button>
        </section>

        {/* Social & Sponsors */}
       
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <span>Privacy Policy</span> | <span> Terms of Use</span> | <span>Code of Conduct</span>
        <p className="mt-1">© 2023 PCCOER. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
