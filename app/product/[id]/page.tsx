"use client";
import Loading from '@/app/components/loading';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
}

const SingleUser = (props: { params: { id: string } }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [props.params.id]);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-white border border-gray-200 shadow-lg rounded-lg">
        <div className="card-body p-5">
          <h2 className="card-title">{user.name}</h2>
          <p className="text-gray-500">Username: {user.username}</p>
          <p className="text-gray-500">Email: {user.email.length > 17 ? `${user.email.substring(0, 17)}...` : user.email}</p>
          <p className="text-gray-500">Phone: {user.phone}</p>
          <p className="text-gray-500">Website: {user.website}</p>
          <p className="text-gray-500">City: {user.address.city}</p>
          <div className="card-actions justify-end">
            <button className="text-white bg-blue-500 hover:bg-blue-600 btn-sm tracking-wide rounded-md w-full"><Link href={"/product"}>Go Back</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
