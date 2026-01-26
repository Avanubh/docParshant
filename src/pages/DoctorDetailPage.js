// src/pages/DoctorDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "../components/Icons";
import { HOSPITAL_NAME, specialtiesData } from "../data";

const DoctorDetailPage = ({ doctor: propDoctor }) => {
  const { id } = useParams();
  
  // Find doctor by URL parameter if not passed as prop
  let doctor = propDoctor;
  if (!doctor && id) {
    // Find doctor by matching the URL slug with doctor name
    const foundSpecialty = specialtiesData.find(specialty => {
      const doctorSlug = specialty.doctorDetails.name.replace(/\s+/g, '-').toLowerCase();
      return doctorSlug === id;
    });
    doctor = foundSpecialty?.doctorDetails;
  }

  if (!doctor) {
    return (
      <section className="py-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Doctor Profile
        </h1>
        <p className="text-lg text-gray-600">Doctor not found.</p>
      </section>
    );
  }

  // Use gallery images from doctor data
  const galleryImages = doctor.galleryImages || [
    doctor.doctorImageUrl,
    "https://placehold.co/300x200/40c1b9/ffffff?text=Clinic+1",
    "https://placehold.co/300x200/40c1b9/ffffff?text=Clinic+2",
    "https://placehold.co/300x200/40c1b9/ffffff?text=Clinic+3",
    "https://placehold.co/300x200/40c1b9/ffffff?text=Clinic+4",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f7faff] via-[#ffffff] to-[#eef5ff] flex flex-col">
      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT: Doctor Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-30" />
          <img
            src={doctor.doctorImageUrl}
            alt={doctor.name}
            className="rounded-[2rem] w-[90%] lg:w-[80%] h-auto shadow-2xl border-4 border-white object-cover"
          />
        </motion.div>

        {/* RIGHT: Doctor Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {doctor.name}
          </h2>
          <p className="text-lg font-semibold text-blue-600 mb-2">
            {doctor.specialty} Specialist
          </p>
          <p className="text-gray-500 mb-6 text-sm">{doctor.qualifications}</p>

          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            {doctor.name} is a highly experienced {doctor.specialty} specialist
            affiliated with{" "}
            <span className="font-semibold text-gray-800">{doctor.hospital}</span>.
            With {doctor.experience}+ years of expertise and a reputation
            for compassionate care,{" "}
            {doctor.gender === "female" ? "she" : "he"} is dedicated to
            providing excellence in patient health and well-being.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-white shadow-md">
              <p className="text-2xl font-bold text-blue-600">{doctor.experience}+</p>
              <p className="text-sm text-gray-500">Years</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-md">
              <p className="text-2xl font-bold text-blue-600">{doctor.patients}</p>
              <p className="text-sm text-gray-500">Patients</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-md">
              <p className="text-2xl font-bold text-blue-600">{doctor.rating}★</p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
            
          </div>

          {/* CONTACT */}
          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <MailIcon /> <span>{doctor.email}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <GlobeIcon />
              <a
                href={doctor.website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {doctor.website}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <MapPinIcon />{" "}
              <span>
                {doctor.hospital}, {doctor.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* IMAGE SCROLLER */}
      <div className="mt-10 overflow-hidden relative">
        <motion.div
          className="flex space-x-6 px-6"
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          animate={{
            x: [0, -600],
            transition: { repeat: Infinity, duration: 12, ease: "linear" },
          }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={img}
                alt={`Doctor clinic ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full bg-[#40c1b9] text-white py-10 mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">{HOSPITAL_NAME}</h3>
            <p className="text-gray-100 text-sm">
              Your trusted partner in healthcare excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
              <PhoneIcon />
              <span className="text-lg font-semibold">{doctor.emergency}</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 flex items-center gap-2 px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105">
              <WhatsAppIcon /> Book Appointment
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DoctorDetailPage;