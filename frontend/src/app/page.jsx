'use client';
import React, { useEffect, useState } from 'react';
import { Card } from './components/Card';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Home = () => {
  const [propertyList, setPropertyList] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const router = useRouter();
  const [locations, setLocations] = useState([]);

  const fetchProperties = async () => {
    const res = await axios.get('http://localhost:5000/property/getall');
    console.log(res.data);
    setPropertyList(res.data.slice(0, 8)); // Fetch only the first 8 properties
    setFilteredProperties(res.data.slice(0, 8)); // Initialize filtered list
    setLocations(res.data.map(property => property.location));
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Function to filter properties based on search query

  const images = [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2VzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4 sm:px-8 md:px-16">
          <div>
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl mb-6">Building Dreams with Precision</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              We create innovative, sustainable, and modern buildings that fit your vision.
            </p>
            <a
              href="#services"
              onClick={() => { router.push("/browse-properties"); }}
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
            >
              Explore Our Work
              <svg
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 017 7v3a7 7 0 01-7 7H4a7 7 0 01-7-7V10a7 7 0 017-7h6zm0 2H4a5 5 0 00-5 5v3a5 5 0 005 5h6a5 5 0 005-5V10a5 5 0 00-5-5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className='flex flex-wrap justify-around p-5 gap-10'>
        {filteredProperties.map((property) => (
          <Card key={property._id} property={property} />
        ))}
      </section>
    </div>
  );
};

export default Home;

