// src/pages/BookingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOSPITAL_NAME } from '../data';
import { WhatsAppIcon } from '../components/Icons';

const BookingPage = ({ selectedDoctor }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        patientName: '',
        patientAge: '',
        location: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend API
        // For production, implement proper form submission to your backend
        setIsSubmitted(true);
    };

    const generateWhatsAppMessage = () => {
        const { patientName, patientAge, location, preferredDate, preferredTime, message } = formData;
        return `Hi, I want to book an appointment at ${HOSPITAL_NAME}.\n\nPatient Details:\n- Name: ${patientName}\n- Age: ${patientAge}\n- Location: ${location}\n- Preferred Date: ${preferredDate}\n- Preferred Time: ${preferredTime}\n\nAdditional Message: ${message}\n\nPlease confirm the booking.`;
    };

    const whatsappUrl = `https://wa.me/918084388876?text=${encodeURIComponent(generateWhatsAppMessage())}`;

    if (isSubmitted) {
        return (
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold text-[#40c1b9] mb-4">Confirm Booking Share on WhatsApp!</h1>
                    <p className="text-xl text-gray-600 mb-8">Your appointment request will be submitted successfully. We will contact you soon to confirm.</p>
                    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Share via WhatsApp</h3>
                        <p className="text-gray-600 mb-6">Share your booking details directly with our team:</p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center mx-auto space-x-2"
                        >
                            <WhatsAppIcon />
                            <span>Share on WhatsApp</span>
                        </a>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#fe6645] text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-colors duration-200"
                    >
                        Back to Home
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Book Appointment</h1>
                        <p className="text-xl text-gray-600">
                            Fill in your details to book an appointment with us.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">Patient Name *</label>
                                <input
                                    type="text"
                                    id="patientName"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent"
                                    placeholder="Enter patient name"
                                />
                            </div>
                            <div>
                                <label htmlFor="patientAge" className="block text-sm font-medium text-gray-700 mb-2">Patient Age *</label>
                                <input
                                    type="number"
                                    id="patientAge"
                                    name="patientAge"
                                    value={formData.patientAge}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    max="120"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent"
                                    placeholder="Enter patient age"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent"
                                placeholder="Enter your location (City/Area)"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    id="preferredDate"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                <input
                                    type="time"
                                    id="preferredTime"
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent resize-none"
                                placeholder="Any specific concerns or requirements?"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#fe6645] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-200"
                        >
                            Submit Booking Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;