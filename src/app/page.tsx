'use client';

import { useState } from 'react';

export default function Home() {
  const [cookieResponse, setCookieResponse] = useState<string | null>(null);

  const setCookie = async () => {
    try {
      // Call our Next.js API route instead of the backend directly
      const response = await fetch('/api/set-cookie', {
        method: 'GET',
        credentials: 'include', // Important for receiving cookies
      });
      
      if (response.ok) {
        const data = await response.json();
        setCookieResponse('Cookie set successfully!');
      } else {
        setCookieResponse('Failed to set cookie');
      }
    } catch (error) {
      console.error('Error setting cookie:', error);
      setCookieResponse('Error setting cookie');
    }
  };

  const getCookie = async () => {
    try {
      // Call our Next.js API route instead of the backend directly
      const response = await fetch('/api/get-cookie', {
        method: 'GET',
        credentials: 'include', // Important for sending cookies
      });
      
      if (response.ok) {
        const data = await response.json();
        setCookieResponse(`Cookie value from server: ${JSON.stringify(data)}`);
      } else {
        setCookieResponse('Failed to get cookie');
      }
    } catch (error) {
      console.error('Error getting cookie:', error);
      setCookieResponse('Error getting cookie');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold mb-4">HTTP-Only Secure Cookie Demo</h1>
      
      <button 
        onClick={setCookie}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send HTTP-Only Secure Cookie
      </button>
      
      <button 
        onClick={getCookie}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Get Cookie From Backend
      </button>
      
      {cookieResponse && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          {cookieResponse}
        </div>
      )}
    </div>
  );
}
