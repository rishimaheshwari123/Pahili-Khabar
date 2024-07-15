// src/components/Footer.js

import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const [count, setCount] = useState(50000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  const { token } = useSelector((state) => state.auth);
  return (
    <footer className="bg-[#2156a4] text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 p-8 md:grid-cols-6 gap-8">
          <div className="w-[70%]">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              नवीनतम मराठी बातम्या
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link to="/" className="text-white hover:text-white">
                  राज्य
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-white">
                  भारत
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white">
                  फोटो गॅलरी
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  ज्योतिष
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  विश्व
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="text-white hover:text-white">
                  तंत्रज्ञान
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  सामान्य ज्ञान
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  ऑटो
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  पॉडकास्ट्स
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              मनोरंजन बातम्या
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link to="/" className="text-white hover:text-white">
                  बॉलिवूड
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-white">
                  टीव्ही बातम्या
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white">
                  OTT बातम्या
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  भोजपुरी सिनेमा
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  चित्रपट समीक्षा
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  तमिळ सिनेमा
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="lg:text-xl text-[14px] font-bold mb-4 text-orange-400">
              क्रीडा बातम्या
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link to="/" className="text-white hover:text-white">
                  T20 विश्व कप
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-white">
                  क्रिकेट
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white">
                  IPL
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="text-white hover:text-white">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:text-xl text-[14px] font-bold mb-4 text-orange-400">
              ट्रेंडिंग बातम्या
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link to="/" className="text-white hover:text-white">
                  व्हिज्युअल स्टोरीज
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-white">
                  आजचे राशीभविष्य
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white">
                  इंडिया 2047 मध्ये
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  शेती
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  उपयुक्त बातम्या
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  प्रवास
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              लाईव्ह टीव्ही
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link to="/" className="text-white hover:text-white">
                  एबीपी न्यूज लाईव्ह टीव्ही
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-white">
                  एबीपी आनंदा लाईव्ह टीव्ही
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white">
                  एबीपी माझा लाईव्ह टीव्ही
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  एबीपी अस्मिता लाईव्ह टीव्ही
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">हवामान</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link to="/" className="text-white hover:text-white">
                  मुंबईचे हवामान
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-white">
                  जयपूरचे हवामान
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white">
                  नवी दिल्लीचे हवामान
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  लखनौचे हवामान
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white">
                  नोएडाचे हवामान
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-12" />
        <div className="mt-8 text-center text-white text-sm">
          <div>
            {" "}
            © {new Date().getFullYear()} Your Company. सर्व हक्क राखीव.
          </div>

          <div>Sites Visit {count}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
