import React, { useState, useRef } from "react";
import MZFileUpload from "../../../../components/fileUpload/MZFileUpload";
import MZInput from "../../../../components/numberInput/MZInput";
import apiClient from "../../../../api/apiClient";
import MZInputControl from "../../../../components/input/MZInputControl";
import MZButton from "../../../../components/button/MZButton";
import MZMessage from "../../../../components/message/MZMessage";
import { useLoader } from "../../../../components/pageLoader/LoaderContext";

const AddProperty = () => {
  const [setFormData] = useState({ price: "", baths: "" });
  const [file, setFile] = useState(null);
  const titleInputRef = useRef();
  const streetAddressInputRef = useRef();
  const propertyTypeInputRef = useRef();
  const unitDetailsInputRef = useRef();
  const sizeInputRef = useRef();
  const bedsInputRef = useRef();
  const bathsInputRef = useRef();
  const priceInputRef = useRef();
  const formRef = useRef();
  const [message, setMessage] = useState({ text: "", type: "" });
  const { showLoader, hideLoader } = useLoader();

  const handleFileSelected = (file) => {
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    try {
      showLoader();
      const response = await apiClient.post("/properties", formData);
      setMessage({ type: "success", text: "Property added successfully!" });
    } catch (error) {
      console.error("Request failed:", error);
      setMessage({
        type: "error",
        text: "Failed to add property. Please try again.",
      });
    } finally {
      hideLoader();
      formRef.current.reset();
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-between mt-10">
      {/* Header */}
      <div className="px-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          First, let’s add your property
        </h2>
      </div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-6 mt-2"></div>{" "}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6 px-6">
          {/* Upload Image */}
          <div className="bg-white p-4 rounded shadow-md flex-1">
            <MZFileUpload
              title={"Add your property image here"}
              instruction={
                "Supports JPG, PNG and MP4 videos. Max file size : 10MB."
              }
              onFileSelected={handleFileSelected}
            />
          </div>

          {/* Property Details Form */}

          <div className="bg-white p-6 rounded shadow-md flex-1">
            <div className="mb-4">
              {message.text && (
                <MZMessage type={message.type} message={message.text} />
              )}

              <MZInputControl
                ref={titleInputRef}
                inputClass="w-full border rounded px-3 py-2"
                placeholder="Property Title"
                labelClass="block font-medium mb-1"
                required
                title="Title"
              />
            </div>
            <div className="mb-4">
              <MZInputControl
                ref={streetAddressInputRef}
                inputClass="w-full border rounded px-3 py-2"
                placeholder="Street Address"
                labelClass="block font-medium mb-1"
                required
                title="Street Address"
              />
            </div>
            <div className="mb-4">
              <MZInputControl
                ref={propertyTypeInputRef}
                inputClass="w-full border rounded px-3 py-2"
                placeholder="Street Address"
                labelClass="block font-medium mb-1"
                required
                title="Street Address"
              />
            </div>
            <div className="mb-4">
              <MZInputControl
                ref={unitDetailsInputRef}
                inputClass="w-full border rounded px-3 py-2"
                placeholder="Unit Details"
                labelClass="block font-medium mb-1"
                required
                title="Unit Details"
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
            <MZButton label="Sign Up" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
