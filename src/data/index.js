// src/data/index.js
import React from 'react';
import { AccessibilityIcon, ConvenienceIcon, SecurityIcon, ConfidentialityIcon, CertifiedIcon, AffordabilityIcon } from '../components/Icons';

export const HOSPITAL_NAME = 'Prashant Heart Hospital';

// Helper to import all images from a context
const importAll = (r) => r.keys().map(r);

// Import images for specific doctors
const doctor1Images = importAll(require.context('../images/Doctor1', false, /\.(png|jpe?g|svg)$/));
const doctor2Images = importAll(require.context('../images/Doctor2', false, /\.(png|jpe?g|svg)$/));

export const specialtiesData = [
    {
        title: 'Cardiologist',
        description: 'Heart Disease, Cardiac Care, Chest Pain, High Blood Pressure',
        imageUrl: 'https://i.ibb.co/Kx9bpXr7/dr1.jpg',
        doctorDetails: {
            name: 'Dr. Prashant Kashyap',
            qualifications: 'MBBS, MD - Medicine, DM - Cardiology, Gold Medalist',
            specialty: 'Cardiology',
            hospital: HOSPITAL_NAME,
            location: 'Begusarai, Bihar',
            address: 'C/O DR. DINESH SINGH, JYOTI KUNJ, I.M.A. PATH, NEAR T.V. TOWER. BEGUSARAI-851101, BIHAR',
            emergency: '+91 80029 82980',
            email: 'prashantkashyap2804@gmail.com',
            website: 'www.drprashantkashyap.com',
            doctorImageUrl: 'https://i.ibb.co/Kx9bpXr7/dr1.jpg',
            galleryImages: doctor2Images,
            experience: 10,
            patients: 3000,
            rating: 4.7,
            gender: 'male'
        }
    },
    {
        title: 'Gynecology',
        description: 'Women Health, Pregnancy Care, Fertility Issues',
        imageUrl: require('../images/Doctor1/seepsethi.jpeg'),
        doctorDetails: {
            name: 'Dr. Seep Sethi',
            qualifications: 'MBBS(MAMC)/MS OBGYN(Mumbai)/ FMAS/DMAS',
            specialty: 'Obstetrics and Gynecology (OB-GYN)',
            hospital: HOSPITAL_NAME,
            location: 'Begusarai, Bihar',
            address: 'C/O DR. DINESH SINGH, JYOTI KUNJ, I.M.A. PATH, NEAR T.V. TOWER. BEGUSARAI-851101, BIHAR',
            emergency: '+91 80029 82980',
            email: 'prashantkashyap2804@gmail.com',
            website: 'www.drprashantkashyap.com',
            doctorImageUrl: require('../images/Doctor1/seepsethi.jpeg'),
            galleryImages: doctor1Images,
            experience: 5,
            patients: 2000,
            rating: 4.9,
            gender: 'female'
        }
    },
    {
        title: 'Physician',
        description: 'General Medicine, Neurological Issues, Internal Medicine',
        imageUrl: 'https://i.ibb.co/k6KrsFsv/Dinesh-Singh.jpg',
        doctorDetails: {
            name: 'Dr. Dinesh Singh',
            qualifications: 'MBBS, MD (Medicine)',
            specialty: 'Physician & Neurologist',
            hospital: HOSPITAL_NAME,
            location: 'Begusarai, Bihar',
            address: 'C/O DR. DINESH SINGH, JYOTI KUNJ, I.M.A. PATH, NEAR T.V. TOWER. BEGUSARAI-851101, BIHAR',
            emergency: '+91 80029 82980',
            email: 'prashantkashyap2804@gmail.com',
            website: 'www.drprashantkashyap.com',
            doctorImageUrl: 'https://i.ibb.co/k6KrsFsv/Dinesh-Singh.jpg',
            galleryImages: [
                'https://i.ibb.co/5g5hM26V/Dinesh-Sigh-3.jpg',
                'https://i.ibb.co/BpTNjnS/Dinesh-Singh-2.jpg',
                'https://ibb.co/zMPJb60',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Medicine+Clinic+3',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Medicine+Clinic+4'
            ],
            experience: 12,
            patients: 7000,
            rating: 4.8,
            gender: 'male'
        }
    },
    {
        title: 'Andrologist',
        description: 'Men Health, Erectile Dysfunction, Premature Ejaculation',
        imageUrl: 'https://placehold.co/300x200/5243c0/ffffff?text=Andrologist',
        doctorDetails: {
            name: 'Dr. Vikram Singh',
            qualifications: 'MS (Urology)',
            specialty: 'Andrologist',
            hospital: HOSPITAL_NAME,
            location: 'Begusarai, Bihar',
            address: 'C/O DR. DINESH SINGH, JYOTI KUNJ, I.M.A. PATH, NEAR T.V. TOWER. BEGUSARAI-851101, BIHAR',
            emergency: '+91 80029 82980',
            email: 'prashantkashyap2804@gmail.com',
            website: 'www.drprashantkashyap.com',
            doctorImageUrl: 'https://placehold.co/500x500/40c1b9/ffffff?text=Dr.+Vikram',
            galleryImages: [
                'https://placehold.co/500x500/40c1b9/ffffff?text=Dr.+Vikram',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Urology+Clinic+1',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Urology+Clinic+2',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Urology+Clinic+3',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Urology+Clinic+4'
            ],
            experience: 18,
            patients: 4000,
            rating: 4.6,
            gender: 'male'
        }
    },
    {
        title: 'Cosmetologist',
        description: 'Skin Care, Hair Fall, Dandruff, Beauty Treatments',
        imageUrl: 'https://placehold.co/300x200/5243c0/ffffff?text=Cosmetologist',
        doctorDetails: {
            name: 'Dr. Sania Mirza',
            qualifications: 'MBBS, Diploma in Cosmetology',
            specialty: 'Cosmetologist',
            hospital: HOSPITAL_NAME,
            location: 'Begusarai, Bihar',
            address: 'C/O DR. DINESH SINGH, JYOTI KUNJ, I.M.A. PATH, NEAR T.V. TOWER. BEGUSARAI-851101, BIHAR',
            emergency: '+91 80029 82980',
            email: 'prashantkashyap2804@gmail.com',
            website: 'www.drprashantkashyap.com',
            doctorImageUrl: 'https://placehold.co/500x500/40c1b9/ffffff?text=Dr.+Sania',
            galleryImages: [
                'https://placehold.co/500x500/40c1b9/ffffff?text=Dr.+Sania',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Cosmetology+Clinic+1',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Cosmetology+Clinic+2',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Cosmetology+Clinic+3',
                'https://placehold.co/300x200/40c1b9/ffffff?text=Cosmetology+Clinic+4'
            ],
            experience: 8,
            patients: 2500,
            rating: 4.9,
            gender: 'female'
        }
    }
];

export const testimonialsData = [
    { name: 'Ranjit K', text: `The process is smooth, reminders are timely, the preliminaries are professional and the consultation is thorough and thoughtful at ${HOSPITAL_NAME}. Overall it's been a very pleasant experience.` },
    { name: 'Bhupendra M', text: `This app is a godsend. Through ${HOSPITAL_NAME}, we got a video consultation with the doctor right away. He prescribed some medicines and my daughter is better now. Many thanks!` },
    { name: 'Krishnakumar S', text: `It is a good app for online consultation. I had a wonderful experience. Thank you, ${HOSPITAL_NAME}, for a convenient service that you provide to us to save time and money.` },
];

export const benefitsData = [
    {
        icon: <AccessibilityIcon />,
        title: 'Accessibility',
        text: `With 30+ specialities, 4000+ Doctors and partnerships with more than 600 renowned hospitals across the nation, provided through ${HOSPITAL_NAME}.`
    },
    {
        icon: <ConvenienceIcon />,
        title: 'Convenience',
        text: 'Most patients prefer online consultations due to the easy and convenient process involved.'
    },
    {
        icon: <SecurityIcon />,
        title: 'Security and privacy',
        text: `All medical information on the ${HOSPITAL_NAME} platform is securely encrypted. We follow the best practices to keep your data safe and secure.`
    },
    {
        icon: <ConfidentialityIcon />,
        title: 'Complete confidentiality',
        text: 'Our intuitive platform facilitates a quick online doctor chat about any concern, with complete confidentiality.'
    },
    {
        icon: <CertifiedIcon />,
        title: 'Certified Online Doctors',
        text: `We have a broad network of top specialized doctors, with over 10 years of experience to provide you with quality care at ${HOSPITAL_NAME}.`
    },
    {
        icon: <AffordabilityIcon />,
        title: 'Affordability',
        text: 'Online consultations help you save money since it costs a fraction of the price compared to physically visiting a doctor.'
    },
];

export const faqData = [
    {
        question: 'What is an online consultation?',
        answer: 'An online doctor consultation happens over an online doctor chat, call, or video call. This enables you to talk to doctors online without having to search or locate a clinic or hospital near you.'
    },
    {
        question: 'How do I do an online consultation?',
        answer: `You can easily start an online consultation in just a few steps on the ${HOSPITAL_NAME} portal. First, choose a doctor from our list of specialists...`
    },
    {
        question: 'Which online doctor should I see?',
        answer: 'You can see a doctor from any specialty depending on your medical concern. Our platform offers a wide range of specialists...'
    },
    {
        question: 'Can I choose a specific doctor to consult with?',
        answer: 'Yes, you can. We have a detailed list of all our doctors with their specialties, experience, and patient ratings.'
    },
    {
        question: 'Can I get a prescription after an online medical consultation?',
        answer: 'Yes, after a successful consultation, the doctor can provide you with a valid digital prescription that you can use to buy medicines from any pharmacy.'
    },
    {
        question: 'Is my online medical consultation secure?',
        answer: 'Absolutely. We use a secure and encrypted platform for all consultations. Your medical records and personal information are kept confidential and are not shared with anyone without your consent.'
    }
];

export const videosData = [
    {
        id: 1,
        title: 'Heart Health Education Video 1',
        videoId: 'c0GhWrXRWNk',
        thumbnail: `https://img.youtube.com/vi/c0GhWrXRWNk/maxresdefault.jpg`,
        description: 'Educational content about heart health and cardiac care by Dr. Prashant Kashyap'
    },
    {
        id: 2,
        title: 'Cardiac Care Tips Video 2',
        videoId: 'qTq4PTD7NBA',
        thumbnail: `https://img.youtube.com/vi/qTq4PTD7NBA/maxresdefault.jpg`,
        description: 'Important tips for maintaining cardiovascular health'
    },
    {
        id: 3,
        title: 'Heart Disease Prevention Video 3',
        videoId: 'aRrIdHRCPNo',
        thumbnail: `https://img.youtube.com/vi/aRrIdHRCPNo/maxresdefault.jpg`,
        description: 'Learn about preventing heart diseases and maintaining a healthy lifestyle'
    },
    {
        id: 4,
        title: 'Cardiology Insights Video 4',
        videoId: 'VkJA4jlEd-Y',
        thumbnail: `https://img.youtube.com/vi/VkJA4jlEd-Y/maxresdefault.jpg`,
        description: 'Professional insights into cardiology and heart treatments'
    },
    {
        id: 5,
        title: 'Heart Health Awareness Video 5',
        videoId: 'DPEYcE2SNoM',
        thumbnail: `https://img.youtube.com/vi/DPEYcE2SNoM/maxresdefault.jpg`,
        description: 'Raising awareness about heart health and early detection'
    },
    {
        id: 6,
        title: 'Cardiac Treatment Options Video 6',
        videoId: 'nljDQG0FVlc',
        thumbnail: `https://img.youtube.com/vi/nljDQG0FVlc/maxresdefault.jpg`,
        description: 'Overview of modern cardiac treatment options and procedures'
    }
];

export const youtubeChannelData = {
    channelName: 'Dr Prashant Kashyap - Cardiologist',
    channelUrl: 'https://www.youtube.com/@DrPrashantKashyap-Cardiologist',
    description: 'Subscribe to our YouTube channel for more educational content about heart health, cardiac care, and medical insights from Dr. Prashant Kashyap.'
};