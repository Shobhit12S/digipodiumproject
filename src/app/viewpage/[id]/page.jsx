'use client';
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ViewPage() {
  const [propertyData, setPropertyData] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  const fetchPropertyData = async () => {
    try {
      console.log(id);
      const res = await axios.get(`http://localhost:5000/property/getbyid/${id}`);
      console.log(res.data);
      setPropertyData(res.data);
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  if (propertyData === null) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Property Details</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8 flex-grow">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              src={propertyData.imageUrl}
              alt={propertyData.title}
            />
          </div>

          {/* Property Details Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{propertyData.title}</h2>
            <p className="text-lg text-gray-600 mb-2">{propertyData.location}</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">{propertyData.price}</p>
            <p className="text-lg text-gray-700 mb-6">{propertyData.description}</p>
            <p className="text-lg text-gray-700 mb-6">{propertyData.features}</p>


            {/* Features Section */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="list-disc list-inside mb-6">
              {(propertyData.features.split(',') || []).map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <button className="w-full lg:w-auto py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Link href={"/contactpage"}>Contact for More Info</Link>
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 mt-8 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Luxury Properties Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ViewPage;