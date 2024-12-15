'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, PropertyPage } from '../components/Card';

const BrowseProperties = () => {

    const [propertyList, setPropertyList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchProperties = async () => {
        const res = await axios.get('http://localhost:5000/property/getall');
        console.log(res.data);
        setPropertyList(res.data);
        setMasterList(res.data);
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">

            <PropertyPage properties={propertyList} masterList={masterList} setProperties={setPropertyList} />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {propertyList.map((property, index) => <Card key={property._id} property={property} />)}
                </div>
            </div>
        </div>
    )
}

export default BrowseProperties;