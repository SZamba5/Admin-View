//Live Camera Feed, before it was live feed from users webcam.

import React from 'react';

const CameraFeed = () => {
  return (
    <div>
      <iframe
        src="https://www.cameraftp.com/cameraftp/publish/camera.aspx/parentID91431007/shareID13185814/modelive/nameParking/camTypeCamera"
        title="Live Camera Feed"
        width="100%"
        height="500px"
        allow="50%"
        frameBorder="0"
      />
    </div>
  );
};

export default CameraFeed;
