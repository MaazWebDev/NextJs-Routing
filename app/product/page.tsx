"use client"; // Mark this as a client component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loading from '../components/loading'; 

interface Users {
  name: string;
  username: string;
  id: number;
  email: string;
  website: string;
  address: {
    city: string;
  };
}

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const response: Users[] = await data.json();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="text-center text-2xl font-bold mb-5">Users List</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        {users.map((item: Users) => {
          return (
            <div
              key={item.id}
              className="p-5 border border-gray-300 shadow-md rounded-lg flex flex-col items-center space-y-4 w-64 h-64"
            >
              <h1 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h1>
              <p className="text-gray-500 text-sm">City: {item.address.city}</p>
              <p className="text-gray-500 text-sm">Website: {item.website}</p>
              <p className="text-gray-500 text-sm">
                Email: {item.email.length > 17 ? `${item.email.substring(0, 17)}...` : item.email}
              </p>
              <button className="text-white bg-blue-500 hover:bg-blue-600 btn-sm tracking-wide rounded-md">
                <Link href={`product/${item.id}`}>View User</Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
