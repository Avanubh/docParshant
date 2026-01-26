// src/components/footer.js (updated to use React Router navigation)
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOSPITAL_NAME } from "../data";

const Footer = () => {
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
      "Foetal Echo": "/service-detail/foetal-echo",
      "TMT- Treadmill Test (Stress Test)": "/service-detail/tmt-treadmill-test",
      "Holter Monitoring": "/service-detail/holter-monitoring",
      "Angiography": "/service-detail/angiography",
      "TPI / PPI (Temporary and Permanent Pacemaker)": "/service-detail/tpi-ppi",
      "ICD (Implantable Cardioverter Defibrillator)": "/service-detail/icd",
      "CRT (Cardiac Resynchronization Therapy)": "/service-detail/crt",
      "RA-Stenting (Renal Artery)": "/service-detail/ra-stenting",
      "Pericardiocentesis": "/service-detail/pericardiocentesis",
      "Angioplasty": "/service-detail/angioplasty"
    };
    return urlMap[serviceName] || "/";
  };

  return (
    <footer className="bg-[#121c37] py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 (Logo/App) */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="https://placehold.co/40x40/ffffff/000000?text=P"
                alt={`${HOSPITAL_NAME} Logo`}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-white">
                {HOSPITAL_NAME}
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="mb-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/videos"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Educational Videos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 text-gray-400">
              <button
                aria-label="Instagram"
                className="hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </button>
              <button
                aria-label="Facebook"
                className="hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </button>
              <button
                aria-label="Twitter"
                className="hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </button>
              <a
                href="https://www.youtube.com/@DrPrashantKashyap-Cardiologist"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>

            <img
              src="https://placehold.co/100x40/ffffff/000000?text=ISO+27001"
              alt="ISO 27001 Certified"
              className="mt-4 rounded"
            />
          </div>

          {/* Column 2 (Contact Us) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#fe6645] mt-1" />
                <span className="text-sm">
                  C/o Dr. Dinesh Singh Jyoti Kunj, I.M.A. Path Near T.V. Tower Begusarai – 851 101, Bihar
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-[#fe6645]" />
                <div className="flex flex-col text-sm">
                  <a href="tel:+918002982980" className="hover:text-white transition-colors">+91 80029 82980</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#fe6645]" />
                <a href="mailto:prashantkashyap2804@gmail.com" className="text-sm hover:text-white transition-colors">
                  prashantkashyap2804@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (Facilities Available) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Facilities Available
            </h3>
            <ul className="space-y-2">
              {[
                "Most Advanced Cath Lab (Philips)",
                "Expert Cardiac Opinion",
                "ECG",
                "ICU",
                "Adult 2D Echo, Stress Echo",
                "Paediatric Echo",
                "Foetal Echo",
                "TMT- Treadmill Test (Stress Test)",
                "Holter Monitoring"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={getServiceUrl(service)}
                    className="hover:text-white transition-colors text-left block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (Intervention) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Intervention
            </h3>
            <ul className="space-y-2">
              {[
                "Angiography",
                "TPI / PPI (Temporary and Permanent Pacemaker)",
                "ICD (Implantable Cardioverter Defibrillator)",
                "CRT (Cardiac Resynchronization Therapy)",
                "RA-Stenting (Renal Artery)",
                "Pericardiocentesis",
                "Angioplasty"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={getServiceUrl(service)}
                    className="hover:text-white transition-colors text-left block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">
            2024 © {HOSPITAL_NAME} Pvt Ltd. All rights reserved.
          </p>
          

          {/* 👇 Meet Developer Link */}
          <a
            href="https://www.linkedin.com/in/anubhav-kumar-jha-48b2751a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fe6645] hover:text-white font-semibold transition-colors duration-200"
          >
            Website Developer →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;