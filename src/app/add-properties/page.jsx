'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProperty = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      imageUrl: '',
      location: '',
      features:'',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Property title is required')
        .max(100, 'Title should not exceed 100 characters'),
      description: Yup.string()
        .required('Property description is required')
        .max(300, 'Description should not exceed 300 characters'),
      price: Yup.number()
        .required('Property price is required')
        .min(1, 'Price should be a positive number'),
      imageUrl: Yup.string().url('Invalid image URL').required('Image URL is required'),
      location: Yup.string().required('Location is required'),
      features: Yup.string().required('features is required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);

      axios.post('http://localhost:5000/property/add', values)
      .then((result) => {
        toast.success("Page successfully")
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || 'Something went wronge')
        
      });
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Property</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Property Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Property Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm">{formik.errors.title}</div>
            )}
          </div>

          {/* Property Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Property Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            )}
          </div>

          {/* Property Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...formik.getFieldProps('price')}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            )}
          </div>

          {/* Property Image URL */}
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Property Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...formik.getFieldProps('imageUrl')}
            />
            {formik.touched.imageUrl && formik.errors.imageUrl && (
              <div className="text-red-500 text-sm">{formik.errors.imageUrl}</div>
            )}
          </div>

          {/* Property Location */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...formik.getFieldProps('location')}
            />
            {formik.touched.location && formik.errors.location && (
              <div className="text-red-500 text-sm">{formik.errors.location}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
            Features
            </label>
            <input
              id="features"
              name="features"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...formik.getFieldProps('features')}
            />
            {formik.touched.features && formik.errors.features && (
              <div className="text-red-500 text-sm">{formik.errors.features}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
