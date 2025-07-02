import React, { useState } from 'react';
import './BuyButton.css' // Move your CSS into this file or use Tailwind equivalent
import { FaCheck, FaShippingFast, FaCoins } from 'react-icons/fa';

const BuyButton = () => {
  const [money, setMoney] = useState(100);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'processing', 'success'
  const [canDownload, setCanDownload] = useState(true);

  const handleBuy = () => {
    if (!canDownload || status !== 'idle') return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('processing');
      setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
          setMoney(prev => prev - 39.99);
          setCanDownload(false);
        }, 1000);
      }, 2800);
    }, 300);
  };

  return (
    <div className="buy-button-wrapper">
      {/* <div className="balance">
        <FaCoins />
        <span>{money.toFixed(2)}</span>
      </div> */}

      <div
        className={`buy ${status} ${!canDownload ? 'download-active' : ''}`}
        onClick={handleBuy}
      >
        {status === 'success' ? (
          <FaCheck className="fa-check" />
        ) : (
          <span>Buy Now!</span>
        )}

        {status === 'idle' && <small>US$39.99</small>}

        {status === 'loading' && <div className="loader">Processing Payment...</div>}

        {status === 'success' && (
          <div className="download active">
            <FaShippingFast className="fa-shipping-fast" />
            <span className="track">Track Package</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyButton;
