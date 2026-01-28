// src/pages/OurServicesPage.js (updated to use React Router navigation)
import { useNavigate } from 'react-router-dom';
import { HOSPITAL_NAME } from '../data';

// Import images
import cathLabImg from '../images/services/Cath Lab.png';
import expertCardiacImg from '../images/services/Expert Cardiac Opinion.png';
import ecgImg from '../images/services/ECG.png';
import icuImg from '../images/services/ICU.png';
import echoImg from '../images/services/Adult 2D Echo, Stress Echo.png';
import paediatricEchoImg from '../images/services/Paediatric Echo.png';
import tmtImg from '../images/services/TMT.png';

const OurServicesPage = () => {
    const navigate = useNavigate();
    
    // Helper function to convert service name to URL slug
    const getServiceUrl = (serviceName) => {
        const urlMap = {
            "Most Advanced Cath Lab (Philips)": "/service-detail/advanced-cath-lab",
            "Expert Cardiac Opinion": "/service-detail/expert-cardiac-opinion",
            "ECG": "/service-detail/ecg",
            "ICU": "/service-detail/icu",
            "Adult 2D Echo, Stress Echo": "/service-detail/adult-2d-echo",
            "Paediatric Echo": "/service-detail/paediatric-echo",
            "TMT- Treadmill Test (Stress Test)": "/service-detail/tmt-treadmill-test"
        };
        return urlMap[serviceName] || "/";
    };
    const services = [
        {
            title: 'Most Advanced Cath Lab (Philips)',
            description: 'State-of-the-art Philips Cath Lab for high-precision cardiac interventions and angiography.',
            imageUrl: cathLabImg,
            color: 'bg-[#40c1b9]',
            link: 'Most Advanced Cath Lab (Philips)'
        },
        {
            title: 'Expert Cardiac Opinion',
            description: 'Consult with top cardiologists for accurate diagnosis and personalized treatment plans.',
            imageUrl: expertCardiacImg,
            color: 'bg-[#28a745]',
            link: 'Expert Cardiac Opinion'
        },
        {
            title: 'ECG',
            description: 'Quick and accurate Electrocardiogram services to detect heart rhythm abnormalities.',
            imageUrl: ecgImg,
            color: 'bg-[#fe6645]',
            link: 'ECG'
        },
        {
            title: 'ICU',
            description: '24/7 Intensive Care Unit equipped with advanced monitoring for critical cardiac care.',
            imageUrl: icuImg,
            color: 'bg-[#ffc107]',
            link: 'ICU'
        },
        {
            title: 'Adult 2D Echo, Stress Echo',
            description: 'Comprehensive echocardiography services to assess heart structure and function under stress.',
            imageUrl: echoImg,
            color: 'bg-[#6f42c1]',
            link: 'Adult 2D Echo, Stress Echo'
        },
        {
            title: 'Paediatric Echo',
            description: 'Specialized heart imaging for children to diagnose congenital heart defects early.',
            imageUrl: paediatricEchoImg,
            color: 'bg-[#17a2b8]',
            link: 'Paediatric Echo'
        },
        {
            title: 'Foetal Echo',
            description: 'Prenatal heart screening to detect cardiac issues in unborn babies.',
            imageUrl: paediatricEchoImg, // Reusing Paediatric Echo image as placeholder
            color: 'bg-[#dc3545]',
            link: 'Foetal Echo'
        },
        {
            title: 'TMT- Treadmill Test (Stress Test)',
            description: 'Treadmill test to evaluate heart performance during physical exertion.',
            imageUrl: tmtImg,
            color: 'bg-[#20c997]',
            link: 'TMT- Treadmill Test (Stress Test)'
        },
        {
            title: 'Holter Monitoring',
            description: 'Continuous heart monitoring to track rhythms over 24-48 hours.',
            imageUrl: ecgImg, // Reusing ECG image as placeholder
            color: 'bg-[#40c1b9]',
            link: 'Holter Monitoring'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our specialized cardiac care services at {HOSPITAL_NAME}. From consultations to advanced interventions, we're dedicated to your heart health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                            onClick={() => navigate(getServiceUrl(service.link))}
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className={`${service.color} absolute top-4 right-4 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <button className="text-[#40c1b9] font-semibold hover:text-[#fe6645] transition-colors duration-200 flex items-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button
                        onClick={() => navigate('/doctors')}
                        className="bg-[#fe6645] text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-200"
                    >
                        Find a Doctor
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurServicesPage;