import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("project");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { id: 1, name: "Projects", link: "#project" },
    { id: 2, name: "Contact", link: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
      <div>
        <Link to="/">
          <h3
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="text-2xl md:text-3xl lg:text-4xl font-light m-0"
          >
            Pharaon
          </h3>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center">
        <ul className="flex space-x-10">
          {links.map((link, index) =>
            link.link === "#project" ? (
              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={1000 + index * 500}
                key={link.id}
                onClick={scrollToProjects}
                className="tracking-wider text-lg hover:text-gray-300 transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </li>
            ) : (
              <Link to={link.link} key={index}>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={1000 + index * 500}
                  key={link.id}
                  className="tracking-wider text-lg hover:text-gray-300 transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </li>
              </Link>
            ),
          )}
        </ul>
      </nav>

      <Link to="/contact">
        <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white">
          Contact
        </button>
      </Link>

      {/* Mobile Button */}
      <button
        onClick={toggleMobileNav}
        className="md:hidden text-3xl p-2 z-50"
        aria-label="Toggle menu"
      >
        <MdMenu />
      </button>

      {/* Mobile Nav */}
      {showMobileNav && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center">
          <nav>
            <ul className="flex flex-col gap-6 items-center text-white text-xl">
              {links.map((link) =>
                link.link === "#project" ? (
                  <li key={link.id}>
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToProjects();
                        setShowMobileNav(false);
                      }}
                      className="hover:text-[#e99b63] transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li key={link.id}>
                    <Link
                      to={link.link}
                      onClick={() => setShowMobileNav(false)}
                      className="hover:text-[#e99b63] transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link to="/contact">
                  <button className="bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
