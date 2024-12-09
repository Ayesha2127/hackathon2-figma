import Image from 'next/image';
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white py-10">
      {/* Page Header */}
      <div className="bg-[#F6F5FF] w-full h-[150px] flex flex-col justify-center items-start px-28 py-6 m-0">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <ul className="flex flex-wrap gap-3 text-gray-600">
          <li>Home .</li>
          <li>Pages .</li>
          <li className="text-pink-500">Contact</li>
        </ul>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-28 py-10">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold text-[#151875] mb-4">Information About Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
            aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
            lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          {/* Decorative Dots */}
          <div className="flex space-x-3 mt-4">
            <span className="w-4 h-4 rounded-full bg-purple-500"></span>
            <span className="w-4 h-4 rounded-full bg-pink-500"></span>
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-[#151875] mb-4">Contact Way</h2>
          <ul className="text-gray-700 flex items-center justify-between  flex-wrap gap-20">
            <li className="flex items-center">
              <span className="h-10 w-10 rounded-full bg-[#5726DF] flex items-center justify-center text-white font-bold"></span>
              <p className="ml-4">
                <strong>Tel:</strong><br /> 877-67-88-99
              </p>
            </li>
            <li className="flex items-center">
              <span className="h-10 w-10 rounded-full bg-[#FB2E86] flex items-center justify-center"></span>
              <p className="ml-4">
                <strong>Email:</strong><br /> shop@store.com
              </p>
            </li>
            <li className="flex items-center">
              <span className="h-10 w-10 rounded-full bg-[#FFB265] flex items-center justify-center"></span>
              <p className="ml-4">
                20 Margaret st, London <br />
                Great Britain, NM98-LK
              </p>
            </li>
            <li className="flex items-center">
              <span className="h-10 w-10 rounded-full bg-[#1BE982] flex items-center justify-center"></span>
              <p className="ml-4">
                Free standard shipping <br />
                on all orders.
              </p>
            </li>
          </ul>
        </div> 

      </div>
<div className='flex justify-evenly flex-wrap items-center'>


    
      {/* Get In Touch Form */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-[600px] px-10">
        <h2 className="text-xl font-semibold text-[#151875] mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
          amet erat vitae eget dolor lobortis.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Subject*"
            className="col-span-2 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Type Your Message*"
            className="col-span-2 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="col-span-2 bg-purple-500 text-white py-3 px-6 rounded-md hover:bg-purple-600"
          >
            Send Mail
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex justify-center py-10">
        <Image
          src="/contact.png"
          alt="Illustration of people contacting"
          className="w-full max-w-md"
        />
      </div>
</div>
    </div>
  );
}
