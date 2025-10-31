'use client'
import React, { useEffect, useState } from 'react';
import { Cctv, Menu, X, ChevronDown } from 'lucide-react';
import {links} from "@/src/data/data";
import {buttons, hover, heading_color} from "@/src/util/themes";
import { useRouter } from "next/navigation";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
    };

    const toggleMobileDropdown = (name) => {
        setMobileDropdown(mobileDropdown === name ? null : name);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isScrolled
                    ? 'bg-white/5 backdrop-blur-2xl shadow-2xl border-b border-white/10'
                    : 'bg-transparent'
                }
        `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* LOGO */}
                        <div
                            onClick={()=>(router.push('/'))}
                            className="flex items-center gap-3 cursor-pointer group select-none">
                            <div className="relative">
                                <Cctv className={`w-8 h-8 text-red-600 transition-transform duration-300 group-hover:rotate-12`} />
                                <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <span
                                className={`text-2xl ${heading_color} bg-clip-text text-transparent uppercase tracking-wider font-black`}
                            >
                Mega Vision
              </span>
                        </div>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-8">
                            {links.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <a
                                        href={item.path}
                                        className="relative text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-light uppercase tracking-wide group flex items-center gap-1"
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                        )}
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${heading_color} group-hover:w-full transition-all duration-300`} />
                                    </a>

                                    {/* DROPDOWN MENU */}
                                    {item.dropdown && (
                                        <div
                                            className={`absolute top-full left-0 mt-2 w-64 bg-gray-900/60 backdrop-blur-2xl rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ${
                                                activeDropdown === item.name
                                                    ? 'opacity-100 visible translate-y-0'
                                                    : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                        >
                                            <div className="py-2">
                                                {item.dropdown.map((dropItem, dropIndex) => (
                                                    <a
                                                        key={dropIndex}
                                                        href={dropItem.path}
                                                        className="block px-4 py-3 hover:bg-white/5 transition-colors group"
                                                    >
                                                        <div className="text-white font-medium text-sm group-hover:text-red-500 transition-colors">
                                                            {dropItem.name}
                                                        </div>
                                                        <div className="text-gray-400 text-xs mt-0.5">
                                                            {dropItem.description}
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* CTA Button */}
                            <button
                                className={`${buttons} ${heading_color} text-white font-medium border-none rounded-full ${hover}`}
                            >
                                Get Started
                            </button>
                        </nav>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute top-20 left-4 right-4 max-h-[calc(100vh-6rem)] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ${
                        mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    }`}
                >
                    <nav className="flex flex-col p-6 gap-2">
                        {links.map((item, index) => (
                            <div key={index}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(item.name)}
                                            className="w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium uppercase tracking-wide flex items-center justify-between"
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Mobile Dropdown Content */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                                mobileDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="pl-4 py-2 space-y-1">
                                                {item.dropdown.map((dropItem, dropIndex) => (
                                                    <a
                                                        key={dropIndex}
                                                        href={dropItem.path}
                                                        onClick={handleLinkClick}
                                                        className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm"
                                                    >
                                                        <div className="font-medium">{dropItem.name}</div>
                                                        <div className="text-xs text-gray-500 mt-0.5">{dropItem.description}</div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href={item.path}
                                        onClick={handleLinkClick}
                                        className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium uppercase tracking-wide"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}

                        <button
                            className={`${heading_color} mt-4 px-6 py-3 rounded-lg text-white font-semibold text-sm uppercase tracking-wide shadow-lg shadow-red-500/25 ${hover}`}
                            onClick={handleLinkClick}
                        >
                            Get Started
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;