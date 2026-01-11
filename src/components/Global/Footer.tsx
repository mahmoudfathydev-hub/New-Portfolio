import { FaFacebookF, FaTiktok, FaGithub , FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-gray-800 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">About Me</h3>
                    <p className="text-gray-400">
                        I'm a frontend developer passionate about crafting clean, modern, and interactive web experiences that users love.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Portfolio</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Services</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <p className="text-gray-400">Kafr El-Dawar, El Beharia, Egypt</p>
                    <p className="text-gray-400">Email:mahmoudfathy.dev@gmail.com</p>
                    <p className="text-gray-400">Phone: +20 120 048 1281</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a target='_blank' href="https://www.facebook.com/mahmoud.fathy.339613?locale=ar_AR" className="text-gray-400 hover:text-blue-500 transition"><FaFacebookF /></a>
                        <a target='_blank' href="https://www.tiktok.com/@eng_ma7moud_fat7y?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-red-600 transition"><FaTiktok /></a>
                        <a target='_blank' href="https://github.com/mahmoudfathydev-hub" className="text-gray-400 hover:text-pink-500 transition"><FaGithub  /></a>
                        <a target='_blank' href="https://www.linkedin.com/in/mahmoud-fathy-439293391/" className="text-gray-400 hover:text-blue-700 transition"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Pharaon. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;
