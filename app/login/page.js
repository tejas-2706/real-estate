import React from 'react';
import Image from 'next/image';
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login / Signup</h2>
        <button className="w-full bg-white text-black py-2 rounded-lg flex items-center justify-center mb-4 border border-gray-300 hover:bg-gray-100">
        <Image src={"./google.svg"} width={30} height={30} alt="logo" className='m-2'></Image>
          {/* <img src="C:/Users/tejas/OneDrive/Desktop/Project-RealEstate/real-estate/public/google-icon-logo-svgrepo-com.svg" alt="Google" className="w-6 h-6 mr-2" /> */}
          <span>Continue with Google</span>
        </button>
        <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center mb-4 hover:bg-gray-800">
        <Image src={"./apple.svg"} width={30} height={30} alt="logo" className='m-2'></Image>
          <span>Continue with Apple</span>
        </button>
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center mb-4 hover:bg-gray-700">
        <Image src={"./github.svg"} width={30} height={30} alt="logo" className='m-2'></Image>
          <span>Continue with GitHub</span>
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
