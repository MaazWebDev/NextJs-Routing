import Image from 'next/image';
import React from 'react';

const App = () => {
  return (
    <>
      <header className="bg-gray-100 py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Product Store</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover the best products at amazing prices.
        </p>
      </header>

      <section className="py-10 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Product</h2>
        <div className="flex flex-col items-center">
          <Image
            src="https://via.placeholder.com/600x400" 
            alt="Featured Product"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
          <p className="text-gray-700 text-center mt-4 mx-auto max-w-prose">
            Explore our latest featured product that combines quality and style. 
            Perfect for your needs, it offers excellent performance at an affordable price. 
            Don't miss out on this amazing offer!
          </p>
        </div>
      </section>
    </>
  );
};

export default App;
