import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
  FaLinkedin,
  FaTelegram,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import Notification from "./Navbar/Notification";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assest/logo.jpg";
import { fetchCategory } from "../../services/operations/admin";
import { handleIsMenuOpen } from "../../redux/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import RealTimeClockAndCube from "./Navbar/RealTime";
import SearchBox from "./Navbar/Search";
import ProfileDropdown from "./Navbar/ProfileDropdown";
import { logout } from "../../services/operations/user";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { category } = useSelector((state) => state.news);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifcationOpen, setNotification] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const togglenoti = () => {
    setNotification(!isNotifcationOpen);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchCategory();
        setCategories(categoriesData?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (category.length !== 0) {
      setCategories(category);
    } else fetchCategories();
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisibility);

  const handleNavClick = () => setNav(!nav);

  const handleDropdownClick = (index) => {
    setDropdownIndex(index === dropdownIndex ? null : index);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <nav className=" text-white text-xl  fixed w-screen h-[50px] top-0 z-50 ">
      <div className=" -h-[50px] bg-[#f26434]  pt-1 min-w-[100vw]">
        <div className="flex justify-end items-center w-11/12 mx-auto gap-2 flex-wrap ">
          {(user?.role === "Admin" || user?.role === "SuperAdmin") && (
            <div>
              <Link
                to="/admin/dashboard"
                className="flex items-center space-x-1 text-white text-[15px]"
              >
                Dashboard
              </Link>
            </div>
          )}

          <div className="flex space-x-1 text-white text-[20px]">
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://www.facebook.com/pahilikhbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            {/* <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a> */}
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://wa.me/7798180354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              className=" bg-green-900 text-sm p-1 rounded-full hover:scale-110"
              href="https://www.threads.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandThreads />
            </a>
          </div>
          {user ? (
            <button
              onClick={() => dispatch(logout(navigate))}
              className="px-5 py-1 mb-1 flex items-center gap-2 bg-[#2156a4] text-white rounded-md"
            >
              Logout <IoIosLogOut />
            </button>
          ) : (
            <div className="flex gap-3 ml-5 text-[13px] text-blue-900 px-2">
              {user ? (
                <Link
                  to="/admin/dashboard"
                  className="px-5 py-1 mb-1 bg-[#2156a4] text-white rounded-md"
                >
                  Sign in
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="px-5 py-1 mb-1 bg-[#2156a4] text-white rounded-md"
                >
                  Sign in
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div className=" bg-[#2156a4] ">
        <div className=" mx-auto flex justify-between w-11/12  items-center relative min-h-[50px]">
          <div className="text-2xl font-bold flex  items-center gap-5">
            <div>
              <IoMenu
                onClick={() => dispatch(handleIsMenuOpen())}
                className=" text-3xl cursor-pointer"
              />
            </div>
            <Link to="/">
              <img
                src={logo}
                className={`transition-all duration-300 ${
                  isVisible ? "w-12 top-0" : "w-16 -top-1"
                } rounded-md absolute `}
                alt="Logo"
              />
            </Link>
          </div>

          {/* <div className="md:hidden" onClick={handleNavClick}>
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div> */}

          <ul className="hidden md:flex space-x-6 items-center text-lg">
            <li>
              <Link to="/" className="flex items-center space-x-1 text-white">
                <span>होम</span>
              </Link>
            </li>
            {categories.map((category, index) => (
              <li
                key={category._id}
                className=" group"
                onMouseEnter={() => {
                  handleDropdownClick(index);
                  setClick(true);
                }}
                onMouseLeave={() => {
                  handleDropdownClick(null);
                  setClick(false);
                }}
                onClick={() => setNav(false)}
              >
                <div>
                  <Link
                    to={`/category/${category._id}`}
                    className={`flex items-center space-x-1 ${
                      dropdownIndex === index ? "text-gray-300" : "text-white"
                    }`}
                    onClick={() => setClick(false)}
                  >
                    <span>{category.name}</span>
                  </Link>
                </div>

                {/* &&                category?.subCategories?.length !== 0  */}
                {dropdownIndex === index && click && (
                  <div className="absolute top-8 left-0 bg-[#2156a4] text-white rounded-md mt-2 py-5 px-4 min-w-[90vw] flex gap-16  ">
                    <ul className=" text-[13px]">
                      {category.subCategories &&
                        category?.subCategories?.length !== 0 &&
                        category.subCategories.map((subCategory) => (
                          <li key={subCategory._id} className="">
                            <Link
                              to={`/subcategory/${subCategory._id}`}
                              className=" hover:text-[#f26434]"
                            >
                              {truncateText(subCategory.name, 15)}
                            </Link>
                          </li>
                        ))}
                    </ul>

                    <div>
                      <div className="grid grid-cols-4 gap-4 mt-2">
                        {category.news &&
                          category.news
                            .slice(0, 4)
                            .filter((currElem) => currElem?.active === true)

                            .map((newsItem) => (
                              <div
                                key={newsItem._id}
                                className="border rounded-md overflow-hidden hover:shadow-lg"
                              >
                                <Link
                                  to={`/${newsItem.slug}`}
                                  onClick={() => setClick(false)}
                                >
                                  <img
                                    src={newsItem?.images[0]?.url}
                                    alt={newsItem.title}
                                    className="w-full h-32 object-cover"
                                  />
                                  <div className="p-2">
                                    <h3 className="text-sm font-medium">
                                      {truncateText(newsItem.title, 15)}
                                      {/* {newsItem.title} */}
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/live"
                className="flex items-center space-x-1 text-white"
              >
                <span>Live Streaming</span>
              </Link>
            </li>
          </ul>

          <div className=" flex items-center space-x-4">
            {/* <Link to="https://www.facebook.com">
              <FaFacebook
                size={24}
                className="text-white hover:text-gray-300"
              />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram
                size={24}
                className="text-white hover:text-gray-300"
              />
            </Link>
            <Link to="https://www.youtube.com">
              <FaYoutube size={24} className="text-white hover:text-gray-300" />
            </Link> */}

            <FaSearch className="cursor-pointer" onClick={toggleSearch} />
            <SearchBox isOpen={isSearchOpen} toggleSearch={toggleSearch} />

            <FaBell
              className=" cursor-pointer"
              onClick={() => setNotification(!isNotifcationOpen)}
            />
            <Notification isOpen={isNotifcationOpen} toggleNoti={togglenoti} />

            <RealTimeClockAndCube />
          </div>
        </div>

        <ul
          className={`md:hidden ${
            nav ? "block" : "hidden"
          } bg-blue-900 px-4 py-6 space-y-4`}
        >
          <li>
            <Link to="/" className="flex items-center space-x-1 text-white">
              <span>होम</span>
            </Link>
          </li>
          {categories.map((category, index) => (
            <li key={category._id} className="hover:text-gray-300">
              <div
                to={category.href || "#"}
                className="flex items-center gap-4"
              >
                <Link
                  to={`/category/${category._id}`}
                  onClick={() => setNav(false)}
                >
                  {category.name}
                </Link>
                {category?.subCategories?.length !== 0 && (
                  <span>
                    <MdKeyboardArrowDown
                      className=" bg-black rounded-full"
                      onClick={() => {
                        if (category.subCategories.length !== 0) {
                          handleDropdownClick(index);
                          return;
                        }
                        setNav(false);
                      }}
                    />
                  </span>
                )}
              </div>
              {dropdownIndex === index && category.subCategories && (
                <ul className="pl-6 ">
                  {category.subCategories.map((subCategory) => (
                    <li
                      key={subCategory._id}
                      className="py-2 hover:text-gray-300"
                    >
                      <Link to={`/subcategory/${subCategory._id}`}>
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <div className="flex items-center justify-center space-x-4">
            <Link to="https://www.facebook.com">
              <FaFacebook
                size={24}
                className="text-white hover:text-gray-300"
              />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram
                size={24}
                className="text-white hover:text-gray-300"
              />
            </Link>
            <Link to="https://www.youtube.com">
              <FaYoutube size={24} className="text-white hover:text-gray-300" />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
