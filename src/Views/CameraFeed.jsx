// src/CameraFeed.js

import React, { useRef, useEffect, useState } from 'react';

const CameraFeed = () => {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraOn(true);
      } catch (err) {
        console.error('Error accessing the camera', err);
        setIsCameraOn(false);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {isCameraOn ? (
        <video
          ref={videoRef}
          autoPlay
          className="camera-feed"  // Add this className
        />
      ) : (
        <p>Camera is off or not accessible</p>
      )}
    </div>
  );
};

export default CameraFeed;
