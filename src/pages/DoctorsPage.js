// src/pages/DoctorsPage.js
import { useNavigate } from 'react-router-dom';
import { specialtiesData, HOSPITAL_NAME } from '../data';
import { MapPinIcon } from '../components/Icons';

const DoctorsPage = ({ handleDoctorClick }) => {
    const navigate = useNavigate();
    
    const handleDoctorNavigation = (doctor) => {
        handleDoctorClick(doctor); // Still call this to set the selected doctor
        navigate(`/doctor/${doctor.id || doctor.name.replace(/\s+/g, '-').toLowerCase()}`);
    };
    
    return (
    <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Meet Our Top Doctors</h1>
            <p className="text-xl text-gray-600 mb-12">Browse by specialty and book your consultation instantly with experts from {HOSPITAL_NAME}.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {specialtiesData.map((specialty, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-[#40c1b9] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
                        onClick={() => handleDoctorNavigation(specialty.doctorDetails)}
                    >
                        <div className="mb-4 relative">
                            <img
                                src={specialty.doctorDetails.doctorImageUrl}
                                alt={`${specialty.doctorDetails.name}`}
                                className="w-32 h-32 object-cover rounded-full border-4 border-[#fe6645] shadow-lg"
                                loading="lazy"
                            />
                        </div>
                        <div className="mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{specialty.doctorDetails.name}</h3>
                            <p className="text-sm font-medium text-[#40c1b9]">{specialty.title}</p>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                            {specialty.doctorDetails.qualifications}
                        </p>
                        <div className="w-full mt-auto">
                            <div className="flex justify-center items-center mb-4 text-gray-500">
                                <MapPinIcon />
                                <span className='ml-1 text-sm'>
                                    {specialty.doctorDetails.location ? specialty.doctorDetails.location.split(',')[0] : 'N/A'}
                                </span>
                            </div>
                            <button 
                                className="w-full bg-[#fe6645] text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent parent div click
                                    handleDoctorNavigation(specialty.doctorDetails);
                                }}
                            >
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default DoctorsPage;