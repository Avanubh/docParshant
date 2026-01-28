// src/pages/ServiceDetailPage.js (updated with additional general services)
import { useNavigate } from 'react-router-dom';

// Import images
import cathLabImg from '../images/services/Cath Lab.png';
import expertCardiacImg from '../images/services/Expert Cardiac Opinion.png';
import ecgImg from '../images/services/ECG.png';
import icuImg from '../images/services/ICU.png';
import echoImg from '../images/services/Adult 2D Echo, Stress Echo.png';
import paediatricEchoImg from '../images/services/Paediatric Echo.png';
import tmtImg from '../images/services/TMT.png';

// Service details data - Expanded with general services
const serviceDetails = {
  'Expert Cardiac Consultation': {
    title: 'Expert Cardiac Consultation',
    description: 'Our expert cardiologists provide comprehensive consultations to assess heart health, discuss symptoms, and develop personalized treatment plans. Using state-of-the-art diagnostic tools, we ensure accurate evaluations and tailored advice for optimal cardiac care.',
    image: expertCardiacImg,
    benefits: [
      'Personalized risk assessment',
      'Latest treatment recommendations',
      'Lifestyle and medication guidance'
    ],
    duration: '30-45 minutes',
    cost: 'Varies by procedure'
  },
  'ECG & Holter Monitoring': {
    title: 'ECG & Holter Monitoring',
    description: 'Electrocardiogram (ECG) and Holter monitoring services to detect irregular heart rhythms and monitor cardiac activity over extended periods. Ideal for diagnosing arrhythmias and evaluating treatment effectiveness.',
    image: ecgImg,
    benefits: [
      'Non-invasive heart rhythm analysis',
      '24-48 hour continuous monitoring',
      'Early detection of abnormalities'
    ],
    duration: 'Varies (ECG: 10 min, Holter: 24-48 hrs)',
    cost: 'Varies by procedure'
  },
  '2D Echo & Stress Echo': {
    title: '2D Echo & Stress Echo',
    description: 'Advanced 2D Echocardiography and Stress Echocardiography to visualize heart structure and function under stress. Essential for detecting valve issues, chamber sizes, and ischemia.',
    image: echoImg,
    benefits: [
      'Detailed imaging of heart valves and walls',
      'Stress test for exercise-induced issues',
      'Safe, radiation-free procedure'
    ],
    duration: '30-60 minutes',
    cost: 'Starting from $200'
  },
  'TMT (Treadmill Stress Test)': {
    title: 'TMT (Treadmill Stress Test)',
    description: 'Treadmill Stress Test (TMT) to evaluate heart performance during physical exertion. Helps identify coronary artery disease and assess exercise tolerance.',
    image: tmtImg,
    benefits: [
      'Simulates real-life physical stress',
      'Monitors ECG changes during exercise',
      'Guides safe exercise prescriptions'
    ],
    duration: '30-45 minutes',
    cost: 'Varies by procedure'
  },
  'Angiography & Angioplasty': {
    title: 'Angiography & Angioplasty',
    description: 'Diagnostic angiography to visualize coronary arteries, followed by angioplasty if blockages are found. Minimally invasive procedure to restore blood flow.',
    image: cathLabImg, // Angiography is done in Cath Lab
    benefits: [
      'Precise identification of blockages',
      'Immediate intervention if needed',
      'Reduced recovery time'
    ],
    duration: '1-2 hours',
    cost: 'Varies by procedure'
  },
  'ICD, CRT, RA-Stenting': {
    title: 'ICD, CRT, RA-Stenting',
    description: 'Implantation of Implantable Cardioverter Defibrillators (ICD), Cardiac Resynchronization Therapy (CRT) devices, and Renal Artery Stenting for advanced heart rhythm management and vascular support.',
    image: cathLabImg, // Procedures often done in Cath Lab environment
    benefits: [
      'Life-saving arrhythmia control',
      'Improved heart synchronization',
      'Targeted vascular treatment'
    ],
    duration: '2-4 hours',
    cost: 'Varies by procedure'
  },
  'ICU & Emergency Cardiac Care': {
    title: 'ICU & Emergency Cardiac Care',
    description: '24/7 Intensive Care Unit (ICU) and emergency services for acute cardiac events like heart attacks and cardiac arrests. Equipped with cutting-edge monitoring and life-support systems.',
    image: icuImg,
    benefits: [
      'Round-the-clock expert care',
      'Advanced life-support equipment',
      'Rapid response and stabilization'
    ],
    duration: 'As required',
    cost: 'Varies based on stay'
  },
  'Pacemaker Implantation (Temporary & Permanent)': {
    title: 'Pacemaker Implantation (Temporary & Permanent)',
    description: 'Surgical implantation of temporary or permanent pacemakers to regulate abnormal heartbeats. Ensures consistent heart rhythm for patients with bradycardia.',
    image: cathLabImg, // Often done in Cath Lab / OT
    benefits: [
      'Restores normal heart rhythm',
      'Minimally invasive options available',
      'Long-term reliability'
    ],
    duration: '1-2 hours',
    cost: 'Varies by procedure'
  },
  'Online Consultation': {
    title: 'Online Consultation',
    description: 'Connect with top doctors via video, audio, or chat for expert advice from the comfort of your home. Our secure platform ensures privacy and convenience for all your healthcare queries.',
    image: 'https://placehold.co/800x400/40c1b9/ffffff?text=Online+Consultation', // Keep placeholder or find generic
    benefits: [
      'Convenient access anytime, anywhere',
      'Secure and confidential sessions',
      'Follow-up reminders and prescriptions'
    ],
    duration: '15-30 minutes',
    cost: 'Varies by procedure'
  },
  'Lab Tests': {
    title: 'Lab Tests',
    description: 'Comprehensive diagnostic lab testing at your doorstep with quick results and detailed reports. From blood work to specialized tests, we cover all your diagnostic needs.',
    image: 'https://placehold.co/800x400/28a745/ffffff?text=Lab+Tests',
    benefits: [
      'Home sample collection available',
      'Fast turnaround time (24-48 hours)',
      'Expert pathologist review'
    ],
    duration: 'Sample collection: 15 min; Results: 24-48 hrs',
    cost: 'Varies by procedure'
  },
  'Health Packages': {
    title: 'Health Packages',
    description: 'Customized health check-up packages tailored to your age, lifestyle, and medical history. Full-body assessments to catch potential issues early.',
    image: 'https://placehold.co/800x400/fe6645/ffffff?text=Health+Packages',
    benefits: [
      'Personalized package recommendations',
      'Includes consultations and reports',
      'Discounts for family packages'
    ],
    duration: '1-2 days',
    cost: 'Varies by procedure'
  },
  'Scans & X-Rays': {
    title: 'Scans & X-Rays',
    description: 'Advanced imaging services including MRI, CT scans, and X-rays with expert radiologist interpretation. High-resolution diagnostics for accurate diagnosis.',
    image: 'https://placehold.co/800x400/ffc107/000000?text=Scans+%26+X-Rays',
    benefits: [
      'State-of-the-art imaging technology',
      'Quick scheduling and reporting',
      'Minimal wait times'
    ],
    duration: '15-60 minutes',
    cost: 'Varies by procedure'
  },
  'Long Term Care Plans': {
    title: 'Long Term Care Plans',
    description: 'Personalized ongoing care programs for chronic conditions, wellness monitoring, and preventive health. Dedicated care coordinators for continuous support.',
    image: 'https://placehold.co/800x400/6f42c1/ffffff?text=Long+Term+Care',
    benefits: [
      'Customized treatment adherence',
      'Regular health check-ins',
      '24/7 support hotline'
    ],
    duration: 'Ongoing',
    cost: 'Varies by procedure'
  }
};

// Mapping new services to existing content or creating new entries
Object.assign(serviceDetails, {
  "Most Advanced Cath Lab (Philips)": {
    title: "Most Advanced Cath Lab (Philips)",
    description: "Our hospital is equipped with the latest Philips Cath Lab, offering high-precision imaging for complex cardiac interventions. This advanced technology ensures safer and more effective procedures.",
    image: cathLabImg,
    benefits: [
      "High-resolution imaging",
      "Reduced radiation exposure",
      "Better clinical outcomes"
    ],
    duration: "Varies by procedure",
    cost: "Varies by procedure"
  },
  "Expert Cardiac Opinion": serviceDetails['Expert Cardiac Consultation'],
  "ECG": serviceDetails['ECG & Holter Monitoring'],
  "ICU": serviceDetails['ICU & Emergency Cardiac Care'],
  "Adult 2D Echo, Stress Echo": serviceDetails['2D Echo & Stress Echo'],
  "Paediatric Echo": {
    title: "Paediatric Echo",
    description: "Specialized echocardiography for children to diagnose congenital heart defects and other cardiac conditions. Our pediatric cardiologists ensure a child-friendly and accurate assessment.",
    image: paediatricEchoImg,
    benefits: [
      "Non-invasive imaging",
      "Early detection of defects",
      "Child-friendly environment"
    ],
    duration: "30-45 minutes",
    cost: "Varies by procedure"
  },
  "Foetal Echo": {
    title: "Foetal Echo",
    description: "Detailed ultrasound of the unborn baby's heart to detect cardiac abnormalities during pregnancy. Essential for high-risk pregnancies and early intervention planning.",
    image: paediatricEchoImg, // Reusing Paediatric Echo image
    benefits: [
      "Prenatal heart screening",
      "Expert fetal cardiologist review",
      "Safe for mother and baby"
    ],
    duration: "30-60 minutes",
    cost: "Varies by procedure"
  },
  "TMT- Treadmill Test (Stress Test)": serviceDetails['TMT (Treadmill Stress Test)'],
  "Holter Monitoring": serviceDetails['ECG & Holter Monitoring'],
  "Angiography": serviceDetails['Angiography & Angioplasty'],
  "TPI / PPI (Temporary and Permanent Pacemaker)": serviceDetails['Pacemaker Implantation (Temporary & Permanent)'],
  "ICD (Implantable Cardioverter Defibrillator)": serviceDetails['ICD, CRT, RA-Stenting'],
  "CRT (Cardiac Resynchronization Therapy)": serviceDetails['ICD, CRT, RA-Stenting'],
  "RA-Stenting (Renal Artery)": serviceDetails['ICD, CRT, RA-Stenting'],
  "Pericardiocentesis": {
    title: "Pericardiocentesis",
    description: "A procedure to remove excess fluid from the sac surrounding the heart (pericardium). Used to treat pericardial effusion and relieve pressure on the heart.",
    image: cathLabImg, // Procedure often uses Cath Lab / Echo guidance
    benefits: [
      "Relieves cardiac tamponade",
      "Diagnostic fluid analysis",
      "Minimally invasive"
    ],
    duration: "45-60 minutes",
    cost: "Varies by procedure"
  },
  "Angioplasty": serviceDetails['Angiography & Angioplasty']
});

const ServiceDetailPage = ({ serviceName }) => {
  const navigate = useNavigate();
  const service = serviceDetails[serviceName] || {};
  const navigateToHome = () => navigate('/');
  const navigateToServices = () => navigate('/our-services');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm text-gray-600 flex items-center">
          <button onClick={navigateToHome} className="hover:text-[#40c1b9] bg-transparent border-none cursor-pointer p-0">
            Home
          </button>
          <span className="mx-2">/</span>
          <button onClick={navigateToServices} className="hover:text-[#40c1b9] bg-transparent border-none cursor-pointer p-0">
            Our Services
          </button>
          <span className="mx-2">/</span>
          <span className="font-semibold">{service.title}</span>
        </nav>

        {/* Hero Section with Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
          <ul className="space-y-2">
            {service.benefits?.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="text-[#40c1b9] mr-3">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
            <div>
              <strong>Duration:</strong><br />
              {service.duration}
            </div>
            <div>
              <strong>Estimated Cost:</strong><br />
              {service.cost}
            </div>
            <div>
              <strong>Availability:</strong><br />
              Mon-Sat, 8 AM - 8 PM
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#fe6645] text-white py-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
          <button
            onClick={() => navigate('/book-appointment')}
            className="bg-white text-[#fe6645] py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;