import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    };

    const links = [
        { id: 1, name: "About", link: "/about" },
        { id: 2, name: "Projects", link: "/projects" },
        { id: 3, name: "Services", link: "/services" },
        { id: 4, name: "Contact", link: "/contact" },
    ];

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
            <div>
                <Link to="/">
                    <h3 data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="text-2xl md:text-3xl lg:text-4xl font-light m-0">Pharaon
                    </h3>
                </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
                <ul className="flex space-x-10">
                    {links.map((link, index) => (
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
                    ))}
                </ul>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white">
                Sign In
            </button>

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
                            {links.map((link) => (
                                <li key={link.id}>{link.name}</li>
                            ))}
                            <li>
                                <button className="bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white">
                                    Sign In
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
