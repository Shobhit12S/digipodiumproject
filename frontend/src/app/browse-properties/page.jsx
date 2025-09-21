'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, PropertyPage } from '../components/Card';

const BrowseProperties = () => {

    const [propertyList, setPropertyList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchProperties = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    console.log("Fetching from:", `${apiUrl}/property/getall`);

    const res = await axios.get(`${apiUrl}/property/getall`);

    setPropertyList(res.data);
    setMasterList(res.data);
  } catch (error) {
    // Safe error logging
    console.error("Error fetching properties:", error && error.message ? error.message : error);
  }
};



    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <PropertyPage 
                properties={propertyList} 
                masterList={masterList} 
                setProperties={setPropertyList} 
            />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {propertyList.map((property) => (
                        <Card key={property._id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrowseProperties;
