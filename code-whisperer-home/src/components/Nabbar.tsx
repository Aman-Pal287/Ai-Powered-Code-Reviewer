import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f172a]/70 border-b border-gray-700/50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 text-xl font-bold text-white">
                    <span className="text-cyan-400">AI</span>-Reviewer
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-gray-300">
                    <li className="hover:text-cyan-400 transition cursor-pointer">Home</li>
                    <li className="hover:text-cyan-400 transition cursor-pointer">Features</li>
                    <li className="hover:text-cyan-400 transition cursor-pointer">Pricing</li>
                    <li className="hover:text-cyan-400 transition cursor-pointer">Docs</li>
                </ul>

                {/* Right Side Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-300 hover:text-cyan-400 transition">Login</button>
                    <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-md transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-300 hover:text-white"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-[#1e293b] border-t border-gray-700 flex flex-col items-center py-4 space-y-3 text-gray-300">
                    <a href="#" className="hover:text-cyan-400">Home</a>
                    <a href="#" className="hover:text-cyan-400">Features</a>
                    <a href="#" className="hover:text-cyan-400">Pricing</a>
                    <a href="#" className="hover:text-cyan-400">Docs</a>
                    <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-md transition">
                        Get Started
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
