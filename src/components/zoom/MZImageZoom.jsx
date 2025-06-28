import React, { useRef, useState } from 'react';

const MZImageZoom = ({ src, zoomScale = 2 }) => {
  const imgRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const backgroundX = (x / rect.width) * 100;
    const backgroundY = (y / rect.height) * 100;

    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${rect.width * zoomScale}px ${rect.height * zoomScale}px`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
      width: '300px',
      height: '300px',
      position: 'absolute',
      top: '0',
      left: '105%', // appear to the right of original image
      border: '1px solid #ccc',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      zIndex: 10,
    });
  };

  const hideZoom = () => setZoomStyle({ display: 'none' });

  return (
    <div className="relative w-full max-w-xl">
      <img
        src={src}
        ref={imgRef}
        alt="Zoom"
        onMouseMove={handleMouseMove}
        onMouseLeave={hideZoom}
        className="w-full h-auto rounded shadow"
      />
      <div style={zoomStyle} />
    </div>
  );
};

export default MZImageZoom;
 