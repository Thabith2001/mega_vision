'use client'
import React from 'react';
import {
    Cctv,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    ArrowRight,
    Heart,
    Shield,
    Clock,
    Headphones,
    Star, Handshake
} from 'lucide-react';
import {heading_color} from "@/src/util/themes";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        products: [
            {name: 'IP Cameras', path: '#ip-cameras'},
            {name: 'Analog Cameras', path: '#analog-cameras'},
            {name: 'PTZ Cameras', path: '#ptz-cameras'},
            {name: 'Dome Cameras', path: '#dome-cameras'},
            {name: 'Bullet Cameras', path: '#bullet-cameras'},
            {name: 'NVR Systems', path: '#nvr'},
            {name: 'DVR Systems', path: '#dvr'}
        ],
        solutions: [
            {name: 'Home Security', path: '#home'},
            {name: 'Business Security', path: '#business'},
            {name: 'Industrial', path: '#industrial'},
            {name: 'Retail Solutions', path: '#retail'},
            {name: 'Access Control', path: '#access'},
            {name: 'Video Analytics', path: '#analytics'}
        ],
        support: [
            {name: 'Installation Service', path: '#installation'},
            {name: 'Maintenance', path: '#maintenance'},
            {name: 'Warranty Info', path: '#warranty'},
            {name: 'Technical Support', path: '#support'},
            {name: 'User Manuals', path: '#manuals'},
            {name: 'FAQ', path: '#faq'}
        ],
        company: [
            {name: 'About Us', path: '#about'},
            {name: 'Why Choose Us', path: '#why-us'},
            {name: 'Our Projects', path: '#projects'},
            {name: 'Testimonials', path: '#testimonials'},
            {name: 'Contact Us', path: '#contact'},
            {name: 'Request Quote', path: '#quote'}
        ]
    };

    const socialLinks = [
        {icon: Facebook, path: '#', label: 'Facebook'},
        {icon: Instagram, path: '#', label: 'Instagram'},
        {icon: Twitter, path: '#', label: 'Twitter'},
        {icon: Linkedin, path: '#', label: 'LinkedIn'},
        {icon: Youtube, path: '#', label: 'YouTube'}
    ];

    const features = [
        {icon: Shield, text: '2 Year Warranty'},
        {icon: Headphones, text: '24/7 Support'},
        {icon: Clock, text: 'Quick Installation'},
        {icon: Handshake, text: '100% Satisfaction'},
        {icon: Star, text: '4.9 Rating'}

    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}/>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"/>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"/>

            {/* Trust Badges Section */}
            <div className="relative border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div
                                    className={`p-3 ${heading_color} rounded-lg group-hover:scale-110 transition-transform`}
                                >
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-white font-semibold">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                            <div className="relative">
                                <Cctv
                                    className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:rotate-12"/>
                                <div
                                    className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                            <span
                                className={`text-3xl ${heading_color} bg-clip-text text-transparent uppercase tracking-wider font-black`}>
                Mega Vision
              </span>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for CCTV cameras and complete surveillance solutions. Protecting what
                            matters most with cutting-edge security technology.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="mailto:sales@megavision.com"
                               className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-red-500/10 transition-colors">
                                    <Mail className="w-4 h-4"/>
                                </div>
                                <span className="text-sm">sales@megavision.com</span>
                            </a>

                            <a href="tel:+1234567890"
                               className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-red-500/10 transition-colors">
                                    <Phone className="w-4 h-4"/>
                                </div>
                                <span className="text-sm">+94 (76) 655-3936</span>
                            </a>

                            <div className="flex items-center gap-3 text-gray-400 group">
                                <div className="p-2 bg-white/5 rounded-lg">
                                    <MapPin className="w-4 h-4"/>
                                </div>
                                <span className="text-sm">123 Main Street,  Colombo 11</span>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <p className="text-red-400 text-sm font-semibold">🔒 Authorized Dealer</p>
                            <p className="text-gray-400 text-xs mt-1">Official distributor of leading CCTV brands</p>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Products</h3>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm group"
                                    >
                                        <ArrowRight
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Solutions</h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm group"
                                    >
                                        <ArrowRight
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm group"
                                    >
                                        <ArrowRight
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company & Newsletter */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Company</h3>
                        <ul className="space-y-3 mb-8">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm group"
                                    >
                                        <ArrowRight
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Follow Us</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.path}
                                        aria-label={social.label}
                                        className="p-2.5 bg-white/5 hover:bg-red-500/20 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
                                    >
                                        <social.icon
                                            className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors"/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="pb-12">
                    <div className={`${heading_color} rounded-2xl p-8 text-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"/>
                        <div className="relative z-10">
                            <h3 className="text-white text-2xl font-bold mb-2">Need a Custom Security Solution?</h3>
                            <p className="text-white/90 mb-6">Get a free consultation and quote from our security
                                experts</p>
                            <button
                                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                                Request Free Quote
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {currentYear} Mega Vision CCTV. All rights reserved.
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500">

                            <Shield className="w-4 h-4 text-red-500"/>
                            <span>developed by Thabith</span>
                        </div>

                        <div className="flex gap-6 text-sm">
                            <a href="#privacy" className="text-gray-500 hover:text-red-500 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-500 hover:text-red-500 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#shipping" className="text-gray-500 hover:text-red-500 transition-colors">
                                Shipping Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;