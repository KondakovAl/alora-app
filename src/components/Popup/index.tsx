import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [isClosed, setIsclosed] = useState(false);
  const [progress, setProgress] = useState(0);

  const inceaseProgress = () => {
    setProgress(progress + 10);
  };

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       if (progress <= 100) {
  //         inceaseProgress();
  //       }
  //     }, 500);

  //     return () => {
  //       if (progress == 100) {
  //         clearTimeout(timer);
  //       }
  //     };
  //   }, [progress]);

  return (
    <div className={`popup ${isClosed ? '--closed' : ''}`}>
      <button
        className='popup__button'
        onClick={() => {
          setIsclosed(true);
        }}
      >
        ×
      </button>
      <p className='popup__text'>scroll down slowly</p>
      <div className='popup__progress'>
        <div
          className='popup__progress-bar'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export { Popup };
