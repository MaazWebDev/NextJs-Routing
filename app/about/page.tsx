"use client";
import React, { useState, useEffect } from 'react';
import Loading from '../components/loading';
import Link from 'next/link';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); 
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-gray-700 text-base mb-4">
          Welcome to our product website! We are dedicated to providing our customers with the best possible experience.
          Our mission is to offer high-quality products that cater to your needs.
        </p>
        <p className="text-gray-700 text-base mb-4">
          Our team is composed of professionals who are passionate about delivering exceptional service and support.
          We believe in transparency, integrity, and building long-lasting relationships with our customers.
        </p>
        <p className="text-gray-700 text-base mb-4">
          Whether you're looking for something specific or just browsing, we're here to help you find the perfect
          product for you. Thank you for choosing us!
        </p>
        <div className="text-center mt-6">
          <button className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">
            <Link href={"/"}>Go To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
