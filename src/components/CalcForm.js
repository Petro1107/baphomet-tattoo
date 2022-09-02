import React from 'react';
import Select from 'react-select';
import BodyZones from './bodyZones.json';
import { useState } from 'react';

import '../styles/CalcForm.css';

//Custom Styles React Select

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isDisabled ? '#6f6f6f' : '#3e3e3e',
    color: 'red',
    borderColor: state.isFocused ? 'black' : 'white',
  }),

  input: (provided, state) => ({
    ...provided,
    color: '#c3c3c3',
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#c3c3c3',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: '#c3c3c3',
  }),

  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted #c3c3c3',
    backgroundColor: state.isFocused ? '#2a2a2a' : '#3d3d3d',
    width: '50vw',
    color: '#c3c3c3',
  }),
};

/* ---------------------------------- ---------------------*/

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
        styles={customStyles}
        options={options}
        onChange={handleZoneChange}
        // className='react-select-container'
        // classNamePrefix='react-select'
        className='optSelect'
      />
      <br />
      <p className='formText'>Tamaño </p>
      <Select
        styles={customStyles}
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
        styles={customStyles}
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
