import React from 'react';
import Select from 'react-select';
import BodyZones from './bodyZones.json';
import { useState } from 'react';

import '../styles/CalcForm.css';

function CalcForm() {
  // STATES

  const [priceEnabled, setPriceEnabled] = useState(true);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [colorEnabled, setColorEnabled] = useState(true);
  const [sizePrice, setSizePrice] = useState(0);
  const [colorPrice, setColorPrice] = useState(1);

  // FUNCS

  const options = BodyZones.map((zone) => {
    return zone;
  });

  const colorOptions = [
    { label: 'B&W', value: 'blackAndWhite', priceMultiplier: 1.3 },
    { label: '+ 2 colores', value: 'plusTwoColors', priceMultiplier: 1.5 },
    { label: '+ 4 colores', value: 'plusFourColors', priceMultiplier: 1.7 },
    { label: '+ 6 colores', value: 'plusSixColors', priceMultiplier: 2 },
  ];

  // HANDLERS

  const handleZoneChange = (e) => {
    setPriceEnabled(false);
    setSizeOptions(e.sizeOptions);
  };

  const handleSizeChange = (e) => {
    setColorEnabled(false);
    setSizePrice(e.value);
  };

  const handleColorChange = (e) => {
    setColorPrice(e.priceMultiplier);
  };

  return (
    <form className='formContainer'>
      <br />
      <p className='formText'>Zona</p>
      <Select
        options={options}
        onChange={handleZoneChange}
        className='optSelect'
      />
      <br />
      <p className='formText'>Tamaño </p>
      <Select
        options={sizeOptions.map((item) => {
          return { label: item.size, value: item.price };
        })}
        isDisabled={priceEnabled}
        onChange={handleSizeChange}
        className='optSelect'
      />
      <br />
      <p className='formText'>Colores</p>
      <Select
        options={colorOptions}
        isDisabled={colorEnabled}
        onChange={handleColorChange}
        className='optSelect'
      />
      <br />
      <br />
      <p className='formText'>
        Precio estimado: <strong>${sizePrice * colorPrice}</strong>
      </p>
    </form>
  );
}

export default CalcForm;
