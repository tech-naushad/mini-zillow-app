import React, { useState } from "react";
import { UploadCloud, RotateCcw } from "lucide-react";

const MZFileUpload = (props) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {    
    if (file && file.type.startsWith("image/")) {      
      props?.onFileSelected(file);
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };  

  const handleReupload = () => {
    setImage(null);
    setPreviewUrl("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <p className="mb-4 text-gray-500">
           {props?.title}
          </p>

      {previewUrl ? (
        <div className="space-y-4">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-64 object-cover rounded-xl border"
          />

          <div className="flex justify-between gap-4">
            <button
              onClick={handleReupload}
              className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:border-blue-400 transition"
        >
          <UploadCloud className="h-10 w-10 text-gray-400 mb-3" />
          <p className="text-gray-500 mb-2">Drag & drop or click to select</p>
          <label className="cursor-pointer inline-block text-blue-600 font-semibold hover:underline">
            Browse file
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          
        </div>
        
      )}
      <div className="bg-gray-50 px-2 p-4 text-center border border-dashed border-gray-300 text-sm text-gray-500 rounded">
            {props?.instruction}
          </div>
    </div>
  );
};

export default MZFileUpload;
