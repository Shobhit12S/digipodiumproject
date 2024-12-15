import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-6"
      style={{
        backgroundImage: "url('interior2.jpg')",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-60 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our application. By using our services, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By accessing and using our application, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree, you should discontinue using the application immediately.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">2. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the application constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">3. User Responsibilities</h2>
        <p className="text-gray-600 mb-4">
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">4. Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any damages arising from the use or inability to use our services, including but not limited to incidental or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">5. Governing Law</h2>
        <p className="text-gray-600 mb-4">
          These terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes will be resolved in the courts of [Your Jurisdiction].
        </p>

        <p className="text-gray-600 mt-6">
          If you have any questions about these terms, please contact us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

