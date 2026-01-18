// src/pages/GalleryPage.js
import React from 'react';

// Dynamically import all images from the gallery directory
const importAll = (r) => r.keys().map(r);
const galleryImages = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));

const GalleryPage = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Gallery</h1>
                <p className="text-xl text-gray-600 mb-12">A glimpse into our facilities and moments.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;
