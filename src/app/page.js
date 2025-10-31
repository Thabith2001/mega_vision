'use client'
import React, { useState, useEffect } from 'react';
import { Camera, Shield, Eye, Zap, ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';

// Theme utilities
const heading_color = 'bg-gradient-to-tr from-red-500 to-red-900';
const hover = "hover:opacity-80 hover:scale-105 hover:cursor-pointer transition duration-300";
const buttons = "border rounded-xl flex w-fit h-fit flex px-6 py-2 font-bold text-lg transition duration-300";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Advanced Security",
            subtitle: "4K Ultra HD Surveillance",
            description: "Crystal clear footage with night vision up to 100ft"
        },
        {
            title: "24/7 Protection",
            subtitle: "Smart AI Detection",
            description: "Intelligent motion tracking and instant alerts"
        },
        {
            title: "Professional Setup",
            subtitle: "Expert Installation",
            description: "Complete installation and configuration included"
        }
    ];

    const features = [
        { icon: Shield, text: "2 Year Warranty" },
        { icon: Eye, text: "24/7 Monitoring" },
        { icon: Zap, text: "Instant Alerts" }
    ];

    const stats = [
        { number: "10K+", label: "Cameras Sold" },
        { number: "5K+", label: "Happy Clients" },
        { number: "98%", label: "Satisfaction Rate" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-sm">
                            <Star className="w-4 h-4 text-red-500 fill-red-500" />
                            <span className="text-red-400 text-sm font-semibold">Trusted by 5000+ Customers</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                                Protect What
                                <span className={`block ${heading_color} bg-clip-text text-transparent`}>
                  Matters Most
                </span>
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                                Advanced CCTV surveillance systems with AI-powered detection, crystal-clear 4K video, and 24/7 monitoring for complete peace of mind.
                            </p>
                        </div>

                        {/* Feature Highlights */}
                        <div className="flex flex-wrap gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className={`p-3 ${heading_color} rounded-lg group-hover:scale-110 transition-transform`}>
                                        <feature.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className={`${heading_color} px-8 py-4 rounded-full text-white font-bold text-lg uppercase tracking-wide shadow-2xl shadow-red-500/30 ${hover} flex items-center gap-2`}>
                                Get Free Quote
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-6 pt-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            ))}
                            <span className="text-gray-400 text-sm ml-2">4.9/5 from 2,500+ reviews</span>
                        </div>
                    </div>

                    {/* Right Content - Camera Showcase */}
                    <div className="relative lg:h-[600px] z-10">
                        {/* Main Camera Display */}
                        <div className="relative">
                            {/* Floating Cards */}
                            <div className="absolute top-0 right-0 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-float">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 ${heading_color} rounded-lg`}>
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-white font-bold">Live Monitoring</span>
                                </div>
                                <p className="text-gray-400 text-sm">24/7 Active Protection</p>
                            </div>

                            {/* Center Camera Illustration */}
                            <div className="relative mx-auto w-full max-w-md mt-20">
                                <div className={`absolute inset-0 ${heading_color} blur-3xl opacity-30 rounded-full`} />
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10 shadow-2xl">
                                    <div className="aspect-square bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                        <Camera className="w-32 h-32 text-red-500" />

                                        {/* Scanning Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan" />

                                        {/* Corner Brackets */}
                                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500" />
                                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500" />
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-500" />
                                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500" />
                                    </div>

                                    {/* Rotating Text */}
                                    <div className="mt-6 text-center space-y-2 h-20">
                                        {slides.map((slide, index) => (
                                            <div
                                                key={index}
                                                className={`transition-all duration-500 ${
                                                    currentSlide === index
                                                        ? 'opacity-100 translate-y-0'
                                                        : 'opacity-0 absolute translate-y-4'
                                                }`}
                                            >
                                                <h3 className="text-white font-bold text-xl">{slide.title}</h3>
                                                <p className="text-red-400 font-semibold">{slide.subtitle}</p>
                                                <p className="text-gray-400 text-sm">{slide.description}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Slide Indicators */}
                                    <div className="flex justify-center gap-2 mt-4">
                                        {slides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                                    currentSlide === index ? 'w-8 bg-red-500' : 'w-1.5 bg-gray-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Stats Card */}
                            <div className="absolute bottom-0 left-0 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 ${heading_color} rounded-lg`}>
                                        <Shield className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-xl">10,000+</div>
                                        <div className="text-gray-400 text-sm">Systems Installed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className={`text-5xl font-black ${heading_color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                                {stat.number}
                            </div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;