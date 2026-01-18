// src/pages/AboutUsPage.js
import React, { useState, useEffect } from 'react';
import { HOSPITAL_NAME } from '../data';

const AboutUsPage = ({ setCurrentPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const aboutImages = [
        'https://i.postimg.cc/HnCctxcp/hospital.jpg',
        'https://i.postimg.cc/HnCctxcp/hospital.jpg',
        'https://i.postimg.cc/HnCctxcp/hospital.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [aboutImages.length]);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">


                {/* Image Scroller Section */}
                <section className="mb-16">
                    <div className="relative w-full max-w-4xl mx-auto">
                        <div className="overflow-hidden rounded-3xl shadow-2xl h-64 md:h-80">
                            {aboutImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`About ${index + 1}`}
                                    className={`w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {aboutImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#40c1b9] scale-110' : 'bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>


                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">About {HOSPITAL_NAME}</h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                        Founded in 2010, {HOSPITAL_NAME} is a network of premier multi-specialty hospitals dedicated to providing compassionate, high-quality healthcare across India.
                        With a commitment to innovation, patient-centric care, and medical excellence, we serve millions with our state-of-the-art facilities and expert teams.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#40c1b9]">4+</div>
                            <div className="text-sm text-gray-600">Hospitals</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#40c1b9]">1000+</div>
                            <div className="text-sm text-gray-600">Doctors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#40c1b9]">50000+</div>
                            <div className="text-sm text-gray-600">Patients Served</div>
                        </div>
                    </div>
                </div>


                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white p-8 rounded-3xl shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To deliver accessible, affordable, and world-class healthcare services that empower individuals and communities to lead healthier lives.
                            We strive to blend cutting-edge technology with compassionate care, ensuring every patient receives personalized attention and the best possible outcomes.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To be India's most trusted healthcare network, expanding our footprint to every corner of the country while advancing medical research and education.
                            We envision a future where preventive care and digital health innovations make quality treatment available to all.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-3xl shadow-lg">
                            <div className="text-4xl mb-4">🩺</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Patient First</h3>
                            <p className="text-gray-600">Every decision prioritizes patient well-being and satisfaction.</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-lg">
                            <div className="text-4xl mb-4">🔬</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600">Embracing the latest medical advancements for superior care.</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-lg">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                            <p className="text-gray-600">Upholding ethical standards and transparency in all operations.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Journey to Better Health</h2>
                    <p className="text-xl text-gray-600 mb-8">Experience the {HOSPITAL_NAME} difference today.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button
                            onClick={() => setCurrentPage('OurServices')}
                            className="bg-[#40c1b9] text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            Explore Services
                        </button>
                        <button
                            onClick={() => setCurrentPage('Doctors')}
                            className="border border-[#40c1b9] text-[#40c1b9] py-3 px-8 rounded-full font-semibold hover:bg-[#40c1b9] hover:text-white transition-colors duration-200"
                        >
                            Meet Our Doctors
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsPage;