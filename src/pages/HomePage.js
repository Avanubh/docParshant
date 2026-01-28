// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ot from '../images/gallery/ot.jpeg';
import dr1 from '../images/dr1.jpeg';
import cathlab from '../images/gallery/cathlab.jpeg';
import pcare from '../images/gallery/pcare.jpeg';
import memcard1 from '../images/memcard1.png';
import { specialtiesData, testimonialsData, benefitsData, faqData, HOSPITAL_NAME } from '../data';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';

const images = [ot, dr1, cathlab, pcare];

const HomePage = ({ openIndex, handleToggle, handleDoctorClick }) => {
    const navigate = useNavigate();
    const [currentSlideHome, setCurrentSlideHome] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const aboutImages = [
        'https://i.postimg.cc/HnCctxcp/hospital.jpg',
        'https://i.postimg.cc/HnCctxcp/hospital.jpg',
        'https://i.postimg.cc/HnCctxcp/hospital.jpg'
    ];

    // Function to handle doctor navigation using React Router
    const handleDoctorNavigation = (doctor) => {
        handleDoctorClick(doctor); // Still call the original function to set selected doctor
        navigate(`/doctor/${doctor.id || doctor.name.replace(/\s+/g, '-').toLowerCase()}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideHome((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [aboutImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
    };

    // Select first three doctors for featured section
    const featuredDoctors = specialtiesData.slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#40c1b9] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-[#fe6645] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Content */}
                        <div className="text-center lg:text-left lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full shadow-lg border border-[#40c1b9]/20">
                                <div className="w-2 h-2 bg-[#40c1b9] rounded-full mr-2 animate-pulse"></div>
                                The right care, is wherever you are.
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                                Consult India's 
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]">
                                    Top Doctors
                                </span>
                                <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 block mt-2">
                                    at Prashant Heart Hospital
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                                Experience world-class healthcare from the comfort of your home with our expert medical professionals.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="inline-flex items-center bg-gradient-to-r from-[#black] to-teal-400 bg-opacity-10 text-[#40c1b9] text-sm font-bold py-3 px-6 rounded-full shadow-lg border-2 border-[#40c1b9]/20">
                                    <span className="text-lg">🎉</span>
                                    <span className="mx-2">Flat 10% Off</span>
                                    <span className="bg-[#fe6645] text-white rounded-full py-1 px-3 text-xs font-bold animate-bounce">NEW10</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-[#fe6645] to-orange-500 text-white py-4 px-8 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    <span>Consult Now</span>
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                                <button className="bg-white/80 backdrop-blur-sm text-gray-700 py-4 px-8 rounded-2xl font-semibold border-2 border-gray-200 hover:border-[#40c1b9] hover:text-[#40c1b9] transition-all duration-300 flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Learn More
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#40c1b9]">50K+</div>
                                    <div className="text-sm text-gray-600">Happy Patients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#fe6645]">100+</div>
                                    <div className="text-sm text-gray-600">Expert Doctors</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                                    <div className="text-sm text-gray-600">Support</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Carousel */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative px-4 lg:px-0">
                            <div className="relative w-full max-w-2xl">
                                {/* Main Image Container */}
                                <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-white p-2 md:p-4">
                                    <div className="relative h-full overflow-hidden rounded-2xl">
                                        {images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Medical facility ${index + 1}`}
                                                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
                                                    index === currentSlideHome 
                                                        ? 'opacity-100 scale-100' 
                                                        : 'opacity-0 scale-105'
                                                }`}
                                            />
                                        ))}
                                        
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-xs md:text-sm font-semibold text-gray-700">Online Now</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-2 md:space-x-3">
                                        <div className="flex -space-x-1 md:-space-x-2">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#40c1b9] rounded-full border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#fe6645] rounded-full border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div>
                                            <div className="text-xs md:text-sm font-bold text-gray-800">2.5K+</div>
                                            <div className="text-xs text-gray-500">Reviews</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Slide Indicators */}
                                <div className="absolute -bottom-8 md:-bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlideHome(index)}
                                            className={`transition-all duration-300 ${
                                                index === currentSlideHome 
                                                    ? 'w-6 md:w-8 h-2 md:h-3 bg-[#40c1b9] rounded-full' 
                                                    : 'w-2 md:w-3 h-2 md:h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-[#40c1b9] rounded-full"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#fe6645] rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-[#40c1b9]/10 text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-4">
                            <span className="w-2 h-2 bg-[#40c1b9] rounded-full mr-2"></span>
                            Our Infrastructure
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            State-of-the-Art 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]"> Facilities</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience cutting-edge medical technology and world-class infrastructure designed for your comfort and care.
                        </p>
                    </div>

                    <div className="relative w-full max-w-6xl mx-auto group px-4 lg:px-0">
                        {/* Main Image Container */}
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-64 md:h-80 lg:h-[500px] bg-white p-3 md:p-6">
                            <div className="relative h-full overflow-hidden rounded-2xl">
                                {aboutImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Medical facility ${index + 1}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
                                            index === currentSlide 
                                                ? 'opacity-100 scale-100' 
                                                : 'opacity-0 scale-110'
                                        }`}
                                    />
                                ))}
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                
                                {/* Content Overlay */}
                                <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-white">
                                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Advanced Medical Equipment</h3>
                                    <p className="text-sm md:text-base text-white/90">Equipped with the latest technology for accurate diagnosis and treatment</p>
                                </div>
                            </div>

                            {/* Enhanced Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-4 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#40c1b9]/20"
                                aria-label="Previous Slide"
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute top-1/2 right-2 md:right-8 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-4 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#40c1b9]/20"
                                aria-label="Next Slide"
                            >
                                <ChevronRightIcon />
                            </button>
                        </div>

                        {/* Enhanced Slide Indicators */}
                        <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                            {aboutImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all duration-300 ${
                                        index === currentSlide 
                                            ? 'w-8 md:w-10 h-2 md:h-3 bg-gradient-to-r from-[#40c1b9] to-[#fe6645] rounded-full' 
                                            : 'w-2 md:w-3 h-2 md:h-3 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-125'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-12 h-12 bg-[#40c1b9]/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[#40c1b9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Diagnostics</h3>
                                <p className="text-gray-600">Latest imaging and diagnostic equipment for accurate results</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-12 h-12 bg-[#fe6645]/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[#fe6645]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Care</h3>
                                <p className="text-gray-600">Comfortable and hygienic environment for optimal healing</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Ready</h3>
                                <p className="text-gray-600">24/7 emergency services with rapid response capabilities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Doctors Section */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #40c1b9 2px, transparent 2px), radial-gradient(circle at 75% 75%, #fe6645 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#40c1b9]/10 to-[#fe6645]/10 text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-4">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Meet Our Experts
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Our 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]"> Core Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet our distinguished specialists who bring years of expertise and compassionate care to every consultation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {featuredDoctors.map((specialty, index) => {
                            const doctor = specialty.doctorDetails;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-[#40c1b9]/20 transform hover:-translate-y-2"
                                    onClick={() => handleDoctorNavigation(doctor)}
                                >
                                    {/* Card Header with Gradient */}
                                    <div className="relative bg-gradient-to-br from-[#40c1b9]/5 to-[#fe6645]/5 p-8 pb-4">
                                        {/* Doctor Image */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative">
                                                <img
                                                    src={doctor.doctorImageUrl}
                                                    alt={`Dr. ${doctor.name}`}
                                                    className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                                {/* Online Status Indicator */}
                                                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-3 border-white shadow-lg">
                                                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Doctor Info */}
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#40c1b9] transition-colors">
                                                {doctor.name}
                                            </h3>
                                            <div className="inline-flex items-center bg-[#40c1b9]/10 text-[#40c1b9] text-sm font-semibold py-1 px-3 rounded-full mb-4">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {specialty.title}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8 pt-4">
                                        {/* Qualifications */}
                                        <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                                            {doctor.qualifications}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-2xl">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-[#40c1b9]">{doctor.experience}+</div>
                                                <div className="text-xs text-gray-500">Years Exp.</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-[#fe6645]">{doctor.patients >= 1000 ? `${Math.floor(doctor.patients/1000)}K+` : `${doctor.patients}+`}</div>
                                                <div className="text-xs text-gray-500">Patients</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-purple-600">{doctor.rating}★</div>
                                                <div className="text-xs text-gray-500">Rating</div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button
                                                className="flex-1 bg-gradient-to-r from-[#fe6645] to-orange-500 text-white py-3 px-4 rounded-2xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDoctorNavigation(doctor);
                                                }}
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                View Profile
                                            </button>
                                            <button className="bg-white border-2 border-[#40c1b9] text-[#40c1b9] py-3 px-4 rounded-2xl font-semibold hover:bg-[#40c1b9] hover:text-white transition-all duration-200 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* View All Doctors Button */}
                    <div className="text-center mt-16">
                        <button className="bg-white border-2 border-[#40c1b9] text-[#40c1b9] py-4 px-8 rounded-2xl font-semibold hover:bg-[#40c1b9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                            View All Doctors
                            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Consult Online Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#40c1b9] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#fe6645] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-4 shadow-lg border border-[#40c1b9]/20">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                            </svg>
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Why Consult Online on 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]"> {HOSPITAL_NAME}</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the future of healthcare with our comprehensive online consultation platform designed for your convenience and well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefitsData.map((benefit, index) => (
                            <div
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 hover:border-[#40c1b9]/20 relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#40c1b9]/5 via-transparent to-[#fe6645]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    {/* Icon and Title */}
                                    <div className="flex flex-col items-center text-center mb-6">
                                        <div className="relative mb-4">
                                            <div className="p-6 bg-gradient-to-br from-[#40c1b9]/10 to-[#fe6645]/10 rounded-2xl text-[#40c1b9] group-hover:from-[#40c1b9] group-hover:to-[#fe6645] group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                                                {benefit.icon}
                                            </div>
                                            {/* Floating Ring */}
                                            <div className="absolute inset-0 border-2 border-[#40c1b9]/20 rounded-2xl group-hover:border-[#40c1b9]/40 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-6"></div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#40c1b9] transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                                        {benefit.text}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <button className="text-[#40c1b9] font-semibold text-sm hover:text-[#fe6645] transition-colors duration-200 flex items-center justify-center mx-auto">
                                            Learn More
                                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-[#40c1b9]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#fe6645]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                            <p className="text-gray-600 mb-6">Join thousands of satisfied patients who trust our online consultation services.</p>
                            <button className="bg-gradient-to-r from-[#fe6645] to-orange-500 text-white py-4 px-8 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                Start Your Consultation
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Section */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(45deg, #40c1b9 25%, transparent 25%), linear-gradient(-45deg, #40c1b9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fe6645 75%), linear-gradient(-45deg, transparent 75%, #fe6645 75%)`,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-gradient-to-br from-[#6c7df3]/10 via-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-2xl border border-white/50 relative">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6c7df3]/20 to-purple-300/20 rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#40c1b9]/20 to-teal-300/20 rounded-full translate-y-24 -translate-x-24"></div>

                        <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                            {/* Content */}
                            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                                {/* Badge */}
                                <div className="inline-flex items-center">
                                    <span className="bg-gradient-to-r from-[#6c7df3] to-purple-600 text-white px-4 py-2 text-sm rounded-full font-bold shadow-lg">
                                        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        LIMITED TIME OFFER
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c7df3] to-purple-600">
                                        {HOSPITAL_NAME}
                                    </span>
                                    <br />
                                    Premium Membership
                                </h2>

                                {/* Description */}
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Unlock exclusive benefits, priority consultations, and significant savings on all medical services.
                                </p>

                                {/* Pricing */}
                                <div className="flex items-center justify-center lg:justify-start gap-4">
                                    <div className="text-4xl font-black text-gray-900">₹999</div>
                                    <div className="flex flex-col">
                                        <span className="text-xl text-gray-400 line-through">₹1999</span>
                                        <span className="text-sm text-green-600 font-semibold">Save 50%</span>
                                    </div>
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                                        50% OFF
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                        <svg className="w-6 h-6 text-[#40c1b9] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Membership Benefits
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                                            <div className="w-12 h-12 bg-[#40c1b9]/10 rounded-xl flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-[#40c1b9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">30% Off</div>
                                                <div className="text-sm text-gray-600">Doctor Consultations</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                                            <div className="w-12 h-12 bg-[#fe6645]/10 rounded-xl flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-[#fe6645]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">20% Off</div>
                                                <div className="text-sm text-gray-600">Lab Tests & More</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="group bg-gradient-to-r from-[#fe6645] to-orange-500 text-white py-4 px-8 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Get Membership Now
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                    <button className="bg-white/80 backdrop-blur-sm text-gray-700 py-4 px-8 rounded-2xl font-semibold border-2 border-gray-200 hover:border-[#40c1b9] hover:text-[#40c1b9] transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Membership Card */}
                            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                                <div className="relative">
                                    <img 
                                        src={memcard1} 
                                        alt="Premium Membership Card" 
                                        className="w-full max-w-md h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                                    />
                                    {/* Floating Badge */}
                                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-xl animate-bounce">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, #40c1b9 2px, transparent 2px), radial-gradient(circle at 80% 50%, #fe6645 2px, transparent 2px)`,
                        backgroundSize: '100px 100px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-4 shadow-lg border border-[#40c1b9]/20">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            Patient Stories
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            What Our 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]"> Patients Say</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Real experiences from real patients who have transformed their healthcare journey with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <div 
                                key={index} 
                                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover:border-[#40c1b9]/20 relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#40c1b9]/5 via-transparent to-[#fe6645]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#40c1b9] to-[#fe6645] rounded-full flex items-center justify-center text-white text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zM6 7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex items-center justify-center mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="ml-2 text-sm text-gray-600 font-semibold">5.0</span>
                                    </div>

                                    {/* Testimonial Text */}
                                    <blockquote className="text-gray-700 leading-relaxed mb-6 italic group-hover:text-gray-800 transition-colors duration-300">
                                        "{testimonial.text}"
                                    </blockquote>

                                    {/* Patient Info */}
                                    <div className="flex items-center">
                                        <div className="relative">
                                            <img 
                                                src={`https://placehold.co/60x60/40c1b9/ffffff?text=${testimonial.name.split(' ')[0][0]}`} 
                                                alt={testimonial.name} 
                                                className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300" 
                                            />
                                            {/* Verified Badge */}
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#40c1b9] transition-colors duration-300">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">Verified Patient</p>
                                            <div className="flex items-center mt-1">
                                                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-xs text-green-600 font-medium">Verified Review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 w-6 h-6 bg-[#40c1b9]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                                <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#fe6645]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 text-center">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-[#40c1b9] mb-2">50K+</div>
                                    <div className="text-sm text-gray-600">Happy Patients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-[#fe6645] mb-2">4.9★</div>
                                    <div className="text-sm text-gray-600">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-purple-600 mb-2">98%</div>
                                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-green-600 mb-2">24/7</div>
                                    <div className="text-sm text-gray-600">Support Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-[#40c1b9] rounded-full mix-blend-multiply filter blur-xl"></div>
                    <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#fe6645] rounded-full mix-blend-multiply filter blur-xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#40c1b9]/10 to-[#fe6645]/10 text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-4">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Our Gallery
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Medical 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]"> Excellence</span>
                            <br />in Pictures
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Take a visual journey through our state-of-the-art facilities, advanced equipment, and moments of care.
                        </p>
                    </div>

                    {/* Enhanced Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {images.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#40c1b9]/20 transform hover:-translate-y-2"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 md:h-72 overflow-hidden rounded-3xl p-3">
                                    <div className="relative h-full overflow-hidden rounded-2xl">
                                        <img
                                            src={imgSrc}
                                            alt={`Medical facility ${index + 1}`}
                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Hover Content */}
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-lg font-bold mb-1">Medical Excellence</h3>
                                            <p className="text-sm text-white/90">Advanced healthcare facilities</p>
                                        </div>

                                        {/* View Button */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                                            <button className="bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="p-4 pt-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-[#40c1b9] rounded-full"></div>
                                            <span className="text-sm text-gray-600 font-medium">
                                                {index === 0 ? 'Operating Theater' : 
                                                 index === 1 ? 'Consultation Room' : 
                                                 index === 2 ? 'Cathlab' : 
                                                 'Patient Care Area'}
                                            </span>
                                        </div>
                                        <button className="text-[#40c1b9] hover:text-[#fe6645] transition-colors duration-200">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-16">
                        <button className="group bg-gradient-to-r from-[#40c1b9] to-teal-500 text-white py-4 px-8 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            View Complete Gallery
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(30deg, #40c1b9 12%, transparent 12.5%, transparent 87%, #40c1b9 87.5%, #40c1b9), linear-gradient(150deg, #40c1b9 12%, transparent 12.5%, transparent 87%, #40c1b9 87.5%, #40c1b9), linear-gradient(30deg, #40c1b9 12%, transparent 12.5%, transparent 87%, #40c1b9 87.5%, #40c1b9), linear-gradient(150deg, #40c1b9 12%, transparent 12.5%, transparent 87%, #40c1b9 87.5%, #40c1b9)`,
                        backgroundSize: '80px 140px',
                        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-4 shadow-lg border border-[#40c1b9]/20">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Got Questions?
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Frequently Asked 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40c1b9] to-[#fe6645]"> Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Find answers to common questions about our services, consultations, and healthcare platform.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {faqData.map((faq, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#40c1b9]/20 overflow-hidden"
                                >
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="w-full flex justify-between items-center p-8 text-left focus:outline-none focus:ring-4 focus:ring-[#40c1b9]/10 transition-all duration-200"
                                    >
                                        <div className="flex items-center flex-1">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#40c1b9]/10 to-[#fe6645]/10 rounded-2xl flex items-center justify-center mr-4 group-hover:from-[#40c1b9]/20 group-hover:to-[#fe6645]/20 transition-all duration-300">
                                                <svg className="w-6 h-6 text-[#40c1b9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-xl font-bold text-gray-900 group-hover:text-[#40c1b9] transition-colors duration-300">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <div className={`w-10 h-10 bg-[#40c1b9]/10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#40c1b9] rotate-180' : 'group-hover:bg-[#40c1b9]/20'}`}>
                                                <ChevronDownIcon isOpen={openIndex === index} />
                                            </div>
                                        </div>
                                    </button>
                                    
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                            openIndex === index 
                                                ? 'max-h-96 opacity-100 pb-8' 
                                                : 'max-h-0 opacity-0 pb-0'
                                        }`}
                                    >
                                        <div className="px-8">
                                            <div className="pl-16 pr-14">
                                                <div className="bg-gradient-to-r from-[#40c1b9]/5 to-[#fe6645]/5 rounded-2xl p-6 border-l-4 border-[#40c1b9]">
                                                    <p className="text-gray-700 leading-relaxed text-lg">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Support */}
                        <div className="mt-16 text-center">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                                <p className="text-gray-600 mb-6">Our support team is here to help you 24/7</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-gradient-to-r from-[#40c1b9] to-teal-500 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Live Chat
                                    </button>
                                    <button className="bg-white border-2 border-[#40c1b9] text-[#40c1b9] py-3 px-6 rounded-2xl font-semibold hover:bg-[#40c1b9] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Email Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;