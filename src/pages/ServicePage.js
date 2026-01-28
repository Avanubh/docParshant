// src/pages/ServicePage.js
import { HOSPITAL_NAME } from '../data';

const ServicePage = ({ serviceName }) => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-[#40c1b9] mb-4">{serviceName}</h1>
            <p className="text-xl text-gray-600 mb-8">Detailed information for the {serviceName} service offered by {HOSPITAL_NAME}.</p>
            <div className="bg-gray-100 p-8 rounded-xl max-w-2xl mx-auto shadow-md">
                <p className="text-gray-700">
                    This is a dedicated page for **{serviceName}**. Here, we would provide comprehensive details about the procedure, what to expect, pricing, and how to book an appointment with our specialists. 
                    {serviceName.includes('Consultation') ? ' You can book a video consultation right now.' : ' Please check back soon for our full service guide!'}
                </p>
            </div>
            <button className="mt-8 bg-[#fe6645] text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-colors duration-200">
                Book {serviceName}
            </button>
        </div>
    </section>
);

export default ServicePage;