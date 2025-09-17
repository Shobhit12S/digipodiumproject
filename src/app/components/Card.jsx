'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Card({ property }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={property.imageUrl} alt={property.title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-900 mb-2">{property.title}</div>

        <p className="text-gray-600 text-sm mb-2">{property.location}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">₹{property.price}</span>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            <Link href={"/viewpage/" + property._id}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export function PropertyPage({ properties, setProperties, masterList }) {

  const filterProperties = (searchTerm) => {
    setProperties(masterList.filter(property =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by location..."
          onChange={(e) => filterProperties(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </div>
  );
}