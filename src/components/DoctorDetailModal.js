// src/components/DoctorDetailModal.js
import { HOSPITAL_NAME } from '../data';
import { PhoneIcon, MailIcon, GlobeIcon, MapPinIcon, WhatsAppIcon } from './Icons';

const DoctorDetailModal = ({ doctor, onClose }) => {
    if (!doctor) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-[100]" onClick={onClose}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 z-10"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    
                    <div className="relative flex flex-col lg:flex-row rounded-3xl overflow-hidden">
                        
                        {/* Left Side (Text/Branding) */}
                        <div className="bg-[#40c1b9] bg-opacity-95 text-white p-8 lg:p-12 flex flex-col justify-between lg:w-2/5">
                            <div>
                                <div className="flex items-center space-x-2 mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.4-1.9 1.8-3.5 1.8-4.5 0-.7-.5-1.2-1.2-1.2-.8 0-1.5.5-2 1.2a2 2 0 0 1-3.6 0c-.5-.7-1.2-1.2-2-1.2-.7 0-1.2.5-1.2 1.2 0 1 .4 2.6 1.8 4.5L12 21l7-7Z"/><path d="M2 8.5h2.5L7 20l3-10 3 10 3-6h4"/></svg>
                                    <span className="text-xl font-bold">{HOSPITAL_NAME}</span>
                                </div>
                                <h2 className="text-3xl font-extrabold mb-4">Your health is <br /><span className="text-[#fe6645] font-black">Our Priority</span></h2>
                                <p className="mb-8 text-gray-200">We care for your health and we will make sure you will be fair and good.</p>
                                <button className="bg-green-500 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center">
                                    <WhatsAppIcon />
                                    Book Now
                                </button>
                            </div>

                            {/* Address and Emergency */}
                            <div className="mt-8">
                                <p className="text-sm font-light mb-4">{doctor.address}</p>
                                <div className="flex items-center space-x-3 mb-2">
                                    <PhoneIcon />
                                    <span className="text-lg font-bold">{doctor.emergency}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side (Doctor Profile) */}
                        <div className="lg:w-3/5 bg-white p-8 lg:p-12 relative flex flex-col justify-center">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <img src={doctor.doctorImageUrl} alt="Decorative background" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-center mb-6">
                                    <img src={doctor.doctorImageUrl} alt={`Dr. ${doctor.name}`} className="w-48 h-48 object-cover rounded-full border-4 border-[#40c1b9] shadow-xl" />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-2">{doctor.name}</h3>
                                <p className="text-xl font-semibold text-gray-700 mb-4">{doctor.specialty} Specialist</p>
                                <p className="text-md font-medium text-gray-500 mb-6">{doctor.qualifications}</p>

                                <div className="space-y-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center space-x-3 text-gray-700">
                                        <MailIcon />
                                        <span>{doctor.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-700">
                                        <GlobeIcon />
                                        <span>{doctor.website}</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-700">
                                        <MapPinIcon />
                                        <span>{doctor.hospital} - {doctor.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailModal;