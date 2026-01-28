// src/App.js (updated to use React Router)
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import OurServicesPage from './pages/OurServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import ServicePage from './pages/ServicePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ToolPage from './pages/ToolPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import BookingPage from './pages/BookingPage';
import GalleryPage from './pages/GalleryPage';
import VideoPage from './pages/VideoPage';
import NotFoundPage from './pages/NotFoundPage';
import { HOSPITAL_NAME } from './data';
import AboutUsPage from './pages/AboutUsPage';
import { WhatsAppIcon } from './components/Icons';
import Footer from './components/footer';

// Navigation component that uses React Router
const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('nav')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Scroll to top whenever location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/flogo.png" alt={`${HOSPITAL_NAME} Logo`} className="w-15 h-10 rounded-full" />
                    <span className="text-xl font-bold text-[#40c1b9]">{HOSPITAL_NAME}</span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isActive('/') ? 'font-bold text-[#40c1b9]' : ''}`}>Home</Link>
                    <Link to="/our-services" className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isActive('/our-services') ? 'font-bold text-[#40c1b9]' : ''}`}>Our Services</Link>
                    <Link to="/doctors" className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isActive('/doctors') ? 'font-bold text-[#40c1b9]' : ''}`}>Find a Doctor</Link>
                    <Link to="/videos" className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isActive('/videos') ? 'font-bold text-[#40c1b9]' : ''}`}>Videos</Link>
                    <Link to="/gallery" className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isActive('/gallery') ? 'font-bold text-[#40c1b9]' : ''}`}>Gallery</Link>
                    <Link to="/about-us" className={`bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isActive('/about-us') ? 'font-bold text-[#40c1b9]' : ''}`}>About Us</Link>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-4">
                    <button
                        onClick={() => navigate('/book-appointment')}
                        className="bg-[#fe6645] text-white py-2 px-4 md:px-8 rounded-full font-semibold shadow-md hover:bg-[#e75a3d] transition-all duration-200 text-sm md:text-base"
                    >
                        Book Now
                    </button>
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="container mx-auto px-4 py-4 space-y-3">
                        <Link 
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${isActive('/') ? 'font-bold text-[#40c1b9] bg-blue-50' : ''}`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/our-services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${isActive('/our-services') ? 'font-bold text-[#40c1b9] bg-blue-50' : ''}`}
                        >
                            Our Services
                        </Link>
                        <Link 
                            to="/doctors"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${isActive('/doctors') ? 'font-bold text-[#40c1b9] bg-blue-50' : ''}`}
                        >
                            Find a Doctor
                        </Link>
                        <Link 
                            to="/videos"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${isActive('/videos') ? 'font-bold text-[#40c1b9] bg-blue-50' : ''}`}
                        >
                            Videos
                        </Link>
                        <Link 
                            to="/gallery"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${isActive('/gallery') ? 'font-bold text-[#40c1b9] bg-blue-50' : ''}`}
                        >
                            Gallery
                        </Link>
                        <Link 
                            to="/about-us"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${isActive('/about-us') ? 'font-bold text-[#40c1b9] bg-blue-50' : ''}`}
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

const App = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    return (
        <ErrorBoundary>
            <Router>
                <div className="min-h-screen bg-gray-50 font-sans">
                    <Navigation />

                    <main>
                        <Routes>
                        <Route path="/" element={<HomePage openIndex={openIndex} handleToggle={handleToggle} handleDoctorClick={handleDoctorClick} />} />
                        <Route path="/our-services" element={<OurServicesPage />} />
                        <Route path="/doctors" element={<DoctorsPage handleDoctorClick={handleDoctorClick} />} />
                        <Route path="/doctor/:id" element={<DoctorDetailPage doctor={selectedDoctor} />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/book-appointment" element={<BookingPage selectedDoctor={selectedDoctor} />} />
                        <Route path="/videos" element={<VideoPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        
                        {/* Service routes */}
                        <Route path="/service/consultation" element={<ServicePage serviceName="Consultation" />} />
                        <Route path="/service/lab-tests" element={<ServicePage serviceName="Lab Tests" />} />
                        <Route path="/service/health-packages" element={<ServicePage serviceName="Health Packages" />} />
                        <Route path="/service/scans-xrays" element={<ServicePage serviceName="Scans & X-Rays" />} />
                        <Route path="/service/long-term-care" element={<ServicePage serviceName="Long Term Care Plans" />} />
                        
                        {/* Tool routes */}
                        <Route path="/tool/blood-pressure" element={<ToolPage toolName="Blood Pressure Monitor" />} />
                        <Route path="/tool/spo2" element={<ToolPage toolName="SPO2 Tracker" />} />
                        <Route path="/tool/heart-rate" element={<ToolPage toolName="Heart Rate Monitor" />} />
                        <Route path="/tool/period-tracker" element={<ToolPage toolName="Period Tracker" />} />
                        <Route path="/tool/self-checks" element={<ToolPage toolName="Self Checks" />} />
                        
                        {/* Service detail routes */}
                        <Route path="/service-detail/expert-cardiac-consultation" element={<ServiceDetailPage serviceName="Expert Cardiac Consultation" />} />
                        <Route path="/service-detail/ecg-holter-monitoring" element={<ServiceDetailPage serviceName="ECG & Holter Monitoring" />} />
                        <Route path="/service-detail/2d-echo-stress-echo" element={<ServiceDetailPage serviceName="2D Echo & Stress Echo" />} />
                        <Route path="/service-detail/tmt-stress-test" element={<ServiceDetailPage serviceName="TMT (Treadmill Stress Test)" />} />
                        <Route path="/service-detail/angiography-angioplasty" element={<ServiceDetailPage serviceName="Angiography & Angioplasty" />} />
                        <Route path="/service-detail/icd-crt-ra-stenting" element={<ServiceDetailPage serviceName="ICD, CRT, RA-Stenting" />} />
                        <Route path="/service-detail/icu-emergency-cardiac-care" element={<ServiceDetailPage serviceName="ICU & Emergency Cardiac Care" />} />
                        <Route path="/service-detail/pacemaker-implantation" element={<ServiceDetailPage serviceName="Pacemaker Implantation (Temporary & Permanent)" />} />
                        <Route path="/service-detail/advanced-cath-lab" element={<ServiceDetailPage serviceName="Most Advanced Cath Lab (Philips)" />} />
                        <Route path="/service-detail/expert-cardiac-opinion" element={<ServiceDetailPage serviceName="Expert Cardiac Opinion" />} />
                        <Route path="/service-detail/ecg" element={<ServiceDetailPage serviceName="ECG" />} />
                        <Route path="/service-detail/icu" element={<ServiceDetailPage serviceName="ICU" />} />
                        <Route path="/service-detail/adult-2d-echo" element={<ServiceDetailPage serviceName="Adult 2D Echo, Stress Echo" />} />
                        <Route path="/service-detail/paediatric-echo" element={<ServiceDetailPage serviceName="Paediatric Echo" />} />
                        <Route path="/service-detail/foetal-echo" element={<ServiceDetailPage serviceName="Foetal Echo" />} />
                        <Route path="/service-detail/tmt-treadmill-test" element={<ServiceDetailPage serviceName="TMT- Treadmill Test (Stress Test)" />} />
                        <Route path="/service-detail/holter-monitoring" element={<ServiceDetailPage serviceName="Holter Monitoring" />} />
                        <Route path="/service-detail/angiography" element={<ServiceDetailPage serviceName="Angiography" />} />
                        <Route path="/service-detail/tpi-ppi" element={<ServiceDetailPage serviceName="TPI / PPI (Temporary and Permanent Pacemaker)" />} />
                        <Route path="/service-detail/icd" element={<ServiceDetailPage serviceName="ICD (Implantable Cardioverter Defibrillator)" />} />
                        <Route path="/service-detail/crt" element={<ServiceDetailPage serviceName="CRT (Cardiac Resynchronization Therapy)" />} />
                        <Route path="/service-detail/ra-stenting" element={<ServiceDetailPage serviceName="RA-Stenting (Renal Artery)" />} />
                        <Route path="/service-detail/pericardiocentesis" element={<ServiceDetailPage serviceName="Pericardiocentesis" />} />
                        <Route path="/service-detail/angioplasty" element={<ServiceDetailPage serviceName="Angioplasty" />} />
                        
                        {/* 404 Route - Must be last */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />

                    {/* Floating WhatsApp Button - Only on Home Page */}
                    <FloatingWhatsApp />
                </div>
            </Router>
        </ErrorBoundary>
    );
};

// Component to show WhatsApp button only on home page
const FloatingWhatsApp = () => {
    const location = useLocation();
    
    if (location.pathname !== '/') return null;
    
    return (
        <a
            href="https://wa.me/918084388876"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 text-white py-3 px-5 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 z-40 flex items-center space-x-2"
        >
            <WhatsAppIcon />
            <span>Book Now</span>
        </a>
    );
};

export default App;