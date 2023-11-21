import React, { useState, useEffect } from 'react';


const rasmlar = [
  'https://wallpapers.com/images/high/4k-bmw-4-series-x44p1lte1sjdpod1.webp',
  'https://wallpapers.com/images/high/4k-bmw-in-rain-sgm6aqfszlh16ezn.webp',
  'https://wallpapers.com/images/high/4k-bmw-in-lake-4kuc38m1mvvgeayu.webp',
  'https://wallpapers.com/images/high/4k-bmw-in-underground-road-86owcoo79z8fo3ra.webp',
  'https://wallpapers.com/images/high/4k-bmw-white-car-rnxr2cj66ej4xly1.webp',
  'https://wallpapers.com/images/high/4k-bmw-alpina-b7-n1coc57rwo69nba8.webp',
  'https://wallpapers.com/images/high/4k-bmw-m6-gray-3wun9ykisgilw4ex.webp'
];

function Appp() {
  const [randomRasm, setRandomRasm] = useState('');

  useEffect(() => {
    changeImage();
  }, []);

  const changeImage = () => {
    const randomRasm = rasmlar[Math.floor(Math.random() * rasmlar.length)];
    setRandomRasm(randomRasm);
  };

  return (
    <div className="Appp">
      <div className="container">
        <img src={randomRasm} alt="Random Rasm" />
        <button className='randomBtn' onClick={changeImage}>Yangi Rasm</button>
      </div>
    </div>
  );
}

export default Appp;
