// src/App.js (updated to include ServiceDetailPage)
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import OurServicesPage from './pages/OurServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import ServicePage from './pages/ServicePage';
import ServiceDetailPage from './pages/ServiceDetailPage'; // New import for detailed service pages
import ToolPage from './pages/ToolPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import BookingPage from './pages/BookingPage';
import GalleryPage from './pages/GalleryPage';
import VideoPage from './pages/VideoPage';
import { HOSPITAL_NAME } from './data';
import AboutUsPage from './pages/AboutUsPage';
import { WhatsAppIcon } from './components/Icons';
import Footer from './components/footer';

const App = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [currentPage, setCurrentPage] = useState('Home');

    // Scroll to top whenever currentPage changes
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
        setCurrentPage('DoctorDetail');
    };

    // Function to render the correct page content
    const renderPageContent = () => {
        if (currentPage === 'Home') {
            return <HomePage openIndex={openIndex} handleToggle={handleToggle} handleDoctorClick={handleDoctorClick} />;
        } else if (currentPage === 'OurServices') {
            return <OurServicesPage setCurrentPage={setCurrentPage} />;
        } else if (currentPage === 'Doctors') {
            return <DoctorsPage handleDoctorClick={handleDoctorClick} />;
        } else if (currentPage === 'DoctorDetail') {
            return <DoctorDetailPage doctor={selectedDoctor} />;
        } else if (currentPage === 'AboutUs') {
            return <AboutUsPage setCurrentPage={setCurrentPage} />;
        } else if (currentPage === 'BookAppointment') {
            return <BookingPage selectedDoctor={selectedDoctor} setCurrentPage={setCurrentPage} />;
        } else if (currentPage === 'Videos') {
            return <VideoPage setCurrentPage={setCurrentPage} />;
        } else if (currentPage === 'Gallery') {
            return <GalleryPage />;
        } else if (currentPage === 'Consultation' || currentPage === 'Lab Tests' || currentPage === 'Health Packages' || currentPage === 'Scans & X-Rays' || currentPage === 'Long Term Care Plans') {
            return <ServicePage serviceName={currentPage} />;
        } else if (currentPage === 'Blood Pressure Monitor' || currentPage === 'SPO2 Tracker' || currentPage === 'Heart Rate Monitor' || currentPage === 'Period Tracker' || currentPage === 'Self Checks') {
            return <ToolPage toolName={currentPage} />;
        } else if ([
            'Expert Cardiac Consultation',
            'ECG & Holter Monitoring',
            '2D Echo & Stress Echo',
            'TMT (Treadmill Stress Test)',
            'Angiography & Angioplasty',
            'ICD, CRT, RA-Stenting',
            'ICU & Emergency Cardiac Care',
            'Pacemaker Implantation (Temporary & Permanent)',
            // New services from footer
            "Most Advanced Cath Lab (Philips)",
            "Expert Cardiac Opinion",
            "ECG",
            "ICU",
            "Adult 2D Echo, Stress Echo",
            "Paediatric Echo",
            "Foetal Echo",
            "TMT- Treadmill Test (Stress Test)",
            "Holter Monitoring",
            "Angiography",
            "TPI / PPI (Temporary and Permanent Pacemaker)",
            "ICD (Implantable Cardioverter Defibrillator)",
            "CRT (Cardiac Resynchronization Therapy)",
            "RA-Stenting (Renal Artery)",
            "Pericardiocentesis",
            "Angioplasty"
        ].includes(currentPage)) {
            return <ServiceDetailPage serviceName={currentPage} setCurrentPage={setCurrentPage} />;
        }
        else {
            return <HomePage openIndex={openIndex} handleToggle={handleToggle} handleDoctorClick={handleDoctorClick} />; // Fallback to home page
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('Home')}>
                        <img src="https://placehold.co/40x40/40c1b9/ffffff?text=P" alt={`${HOSPITAL_NAME} Logo`} className="rounded-full" />
                        <span className="text-xl font-bold text-[#40c1b9]">{HOSPITAL_NAME}</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <button onClick={() => setCurrentPage('OurServices')} className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${currentPage === 'OurServices' ? 'font-bold text-[#40c1b9]' : ''}`}>Our Services</button>
                        <button onClick={() => setCurrentPage('Doctors')} className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${currentPage === 'Doctors' ? 'font-bold text-[#40c1b9]' : ''}`}>Find a Doctor</button>
                        <button onClick={() => setCurrentPage('Videos')} className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${currentPage === 'Videos' ? 'font-bold text-[#40c1b9]' : ''}`}>Videos</button>
                        <button onClick={() => setCurrentPage('Gallery')} className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${currentPage === 'Gallery' ? 'font-bold text-[#40c1b9]' : ''}`}>Gallery</button>
                        <button
                            onClick={() => setCurrentPage('AboutUs')}
                            className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${currentPage === 'AboutUs' ? 'font-bold text-[#40c1b9]' : ''}`}
                        >
                            About Us
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <button
                            onClick={() => setCurrentPage('BookAppointment')}
                            className="bg-[#fe6645] text-white py-2 px-6 md:px-8 rounded-full font-semibold shadow-md hover:bg-[#e75a3d] transition-all duration-200"
                        >
                            Book Now
                        </button>
                    </div>

                </nav>
            </header>

            <main>
                {renderPageContent()}
            </main>

            {/* Footer */}
            <Footer setCurrentPage={setCurrentPage} />

            {/* Floating WhatsApp Button - Only on Home Page */}
            {currentPage === 'Home' && (
                <a
                    href="https://wa.me/918002982980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 bg-green-500 text-white py-3 px-5 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 z-40 flex items-center space-x-2"
                >
                    <WhatsAppIcon />
                    <span>Book Now</span>
                </a>
            )}
        </div>
    );
};

export default App;