import React from 'react';
import Select from 'react-select';
import BodyZones from './bodyZones.json';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [sizeValue, setSizeValue] = useState('');
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
    setSizeValue(e.label);
  };

  const handleColorChange = (e) => {
    setColorPrice(e.priceMultiplier);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        e.target,
        'Bpjebdvh3FXRUxHiP'
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form className='formContainer' onSubmit={sendEmail}>
      <br />
      <p className='formText'>Zona</p>
      <Select
        styles={customStyles}
        options={options}
        onChange={handleZoneChange}
        // className='react-select-container'
        // classNamePrefix='react-select'
        className='optSelect'
        name='zone_info'
      />
      <br />
      <p className='formText'>Tamaño </p>
      <Select
        styles={customStyles}
        options={sizeOptions.map((item) => {
          return { label: item.value, value: item.price };
        })}
        isDisabled={priceEnabled}
        onChange={handleSizeChange}
        className='optSelect'
        name='size_info'
      />
      <input className='sizeValue' name='size_value' value={sizeValue} />
      <br />
      <p className='formText'>Colores</p>
      <Select
        styles={customStyles}
        options={colorOptions}
        isDisabled={colorEnabled}
        onChange={handleColorChange}
        className='optSelect'
        name='color_info'
      />
      <br />
      <br />
      <p className='formText'>
        Precio estimado: <strong>${sizePrice * colorPrice}</strong>
        <input
          className='priceInfo'
          type='none'
          name='price_info'
          value={sizePrice * colorPrice}
        />
      </p>
      <div className='contactSection'>
        <label htmlFor='user_name'>Nombre</label>
        <input type='text' name='user_name' id='user_name' />
        <label htmlFor='user_email'>Email</label>
        <input type='email' name='user_email' id='email' />
        <label htmlFor='user_phone'>Teléfono</label>
        <input type='tel' name='user_phone' id='phone' />
        <label htmlFor='user_message'>Información adicional</label>
        <textarea type='textarea' name='user_message' id='contact-msg' />
        <button className='btnSubmit' type='submit'>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default CalcForm;
