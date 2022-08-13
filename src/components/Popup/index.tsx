import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [isClosed, setIsclosed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsclosed(true);
    }, 5000);
  }, []);

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
        <div className='popup__progress-bar'></div>
      </div>
    </div>
  );
};

export { Popup };
