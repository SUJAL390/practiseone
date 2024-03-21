// LoadingFallback.js
import React, { useState, useEffect } from 'react';
import '../css/LoadingFallback.css'; // Ensure you have your CSS for styling

function LoadingFallback() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div className="fallback-container">
      <div className="loader"></div>
      <p>Loading, please wait...</p>
    </div>
  ) : null;
}

export default LoadingFallback;
