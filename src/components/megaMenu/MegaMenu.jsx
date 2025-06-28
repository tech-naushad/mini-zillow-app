import React from 'react';
import { ChevronDown } from 'lucide-react';

const MegaMenu = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-gray-800">MyLogo</div>
          <div className="hidden md:flex space-x-8">
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full z-20 hidden group-hover:flex bg-white shadow-lg mt-2 p-6 w-screen max-w-4xl rounded-xl">
                <div className="grid grid-cols-3 gap-6 w-full">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Web Development</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-blue-500">React</a></li>
                      <li><a href="#" className="hover:text-blue-500">Next.js</a></li>
                      <li><a href="#" className="hover:text-blue-500">Node.js</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Mobile Apps</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-blue-500">iOS</a></li>
                      <li><a href="#" className="hover:text-blue-500">Android</a></li>
                      <li><a href="#" className="hover:text-blue-500">React Native</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Cloud</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-blue-500">AWS</a></li>
                      <li><a href="#" className="hover:text-blue-500">Azure</a></li>
                      <li><a href="#" className="hover:text-blue-500">GCP</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
