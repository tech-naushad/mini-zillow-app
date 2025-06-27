import React, { useState, useRef } from "react";
import { FaDollarSign, FaBed, FaBath, FaExpand } from "react-icons/fa";
import MZFileUpload from "../../../../components/fileUpload/MZFileUpload";
import MZInput from "../../../../components/numberInput/MZInput";
import apiClient from "../../../../api/apiClient"; // Adjust the import path as necessary

const AddProperty = () => {
  const [formData, setFormData] = useState({ price: "", baths: "" });
  const [file, setFile] = useState(null);
  const titleInputRef = useRef();
  const streetAddressInputRef = useRef();
  const propertyTypeInputRef = useRef();
  const unitDetailsInputRef = useRef();
  const sizeInputRef = useRef();
  const bedsInputRef = useRef();
  const bathsInputRef = useRef();
  const priceInputRef = useRef();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileSelected = (file) => {
    setFile(file);
  };

  const AddProperty = () => {
    debugger;
    var propertyDetails = {
      title: titleInputRef.current.value,
      streetAddress: streetAddressInputRef.current.value,
      propertyType: propertyTypeInputRef.current.value,
      unitDetails: unitDetailsInputRef.current.value,
      size: sizeInputRef.current.value,
      beds: bedsInputRef.current.value,
      baths: bathsInputRef.current.value,
      price: priceInputRef.current.value,
    };

    const formData = new FormData();
    formData.append("propertyDetails", JSON.stringify(propertyDetails)); //
    formData.append("file", file);

    const createProperty = async () => {
      try {
        const response = await apiClient.post("/properties", formData);
        console.log(response.data);
      } catch (error) {
        console.error("Request failed:", error);
      }
    };
    createProperty();
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <div className="px-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          First, let’s add your property
        </h2>
        <div className="flex items-center">
          <button className="w-12 h-6 bg-gray-200 rounded-full flex items-center justify-between px-1">
            <span className="w-4 h-4 bg-white rounded-full shadow"></span>
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-6 mt-2"></div>{" "}
      <div className="flex flex-col md:flex-row gap-6 px-6">
        {/* Upload Image Card */}
        <div className="bg-white p-4 rounded shadow-md flex-1">
          <MZFileUpload
            title={"Add your property image here"}
            instruction={
              "Supports JPG, PNG and MP4 videos. Max file size : 10MB."
            }
            onFileSelected={handleFileSelected}
          ></MZFileUpload>
        </div>

        {/* Property Details Form */}
        <div className="bg-white p-6 rounded shadow-md flex-1">
          <div className="mb-4">
            <label className="block font-medium mb-1">Title:</label>
            <input
              type="text"
              ref={titleInputRef}
              placeholder="Property Title :"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Street Address:</label>
            <input
              type="text"
              ref={streetAddressInputRef}
              placeholder="Street Address :"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Property type:</label>
            <input
              type="text"
              ref={propertyTypeInputRef}
              placeholder="Property type :"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Unit Details:</label>
            <input
              type="text"
              ref={unitDetailsInputRef}
              label="Unit Details:"
              placeholder="Unit Details :"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <MZInput
                type="number"
                ref={sizeInputRef}
                name="size"
                label="Size:"
                min={60}
                max={200}
                placeholder="Size (sqft) :"
                className="w-full outline-none"
              />
            </div>

            <div className="flex-1">
              <MZInput
                type="number"
                ref={bedsInputRef}
                name="Beds"
                label="Beds:"
                placeholder="Total Beds :"
                className="w-full outline-none"
              />
            </div>

            <div className="flex-1">
              <MZInput
                type="number"
                ref={bathsInputRef}
                name="baths"
                label="Baths:"
                placeholder="Total Baths :"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <MZInput
              type="number"
              name="price"
              ref={priceInputRef}
              label="Price"
              placeholder="Price :"
              className="w-full outline-none"
            />
          </div>

          <button
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={AddProperty}
          >
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
