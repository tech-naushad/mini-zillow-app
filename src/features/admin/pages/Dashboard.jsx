// src/pages/PropertyDetails.jsx
import React from 'react';
import { MapPinIcon, PhoneIcon, HomeIcon, ClipboardDocumentListIcon, BellIcon, HeartIcon, ChatBubbleBottomCenterTextIcon, UserCircleIcon, ArrowLeftOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const PropertyDetails = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 space-y-4">
        <h1 className="text-2xl font-bold text-blue-900">INVE</h1>
        <nav className="space-y-3 text-gray-700">
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <HomeIcon className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <ClipboardDocumentListIcon className="w-5 h-5" /> Properties
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <ClipboardDocumentListIcon className="w-5 h-5" /> Pending Properties
          </a>
          <a href="#" className="flex items-center gap-2 font-semibold text-blue-700">
            <MagnifyingGlassIcon className="w-5 h-5" /> Search
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <BellIcon className="w-5 h-5" /> Notifications <span className="ml-1 bg-orange-100 text-orange-600 px-1 rounded text-xs">4</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <HeartIcon className="w-5 h-5" /> Wishlist <span className="ml-1 bg-orange-100 text-orange-600 px-1 rounded text-xs">6</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5" /> Contact
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <UserCircleIcon className="w-5 h-5" /> Account
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-500">
            <ArrowLeftOnRectangleIcon className="w-5 h-5" /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
      </main>
    </div>
  );
};

export default PropertyDetails;
