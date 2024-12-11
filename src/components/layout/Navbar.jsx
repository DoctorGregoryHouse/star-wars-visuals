import { useState } from 'react';
import logo from '../../assets/svg/main_logo.svg';
const Navbar = () => {
    return (
        <nav className="bg-transparent backdrop-blur-md bg-opacity-50 flex justify-center py-4 px-6 sticky top-0 relative"> <div className="flex items-center">
            <img src={logo} alt="logo" className="h-8 w-8 mr-4" />
            <span className="text-2xl font-semibold"></span>
        </div>
            <div className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400">About</a>
                <a href="#" className="hover:text-gray-400">Contact</a>
                <a href="#" className="hover:text-gray-400">Blog</a>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
        </nav>
    );
};


export default Navbar;
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 bg-transparent backdrop-blur-md bg-gray-800/50 text-white p-4 space-y-2">
                    <a href="#" className="block hover:text-gray-400">Home</a>
                    <a href="#" className="block hover:text-gray-400">About</a>
                    <a href="#" className="block hover:text-gray-400">Contact</a>
                    <a href="#" className="block hover:text-gray-400">Blog</a>
                </div>
            )}
        </div>
    );
};
