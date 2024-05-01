import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: Math.random().toString() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input 
        type="number" 
        id="width" 
        name="width" 
        value={formData.width} 
        onChange={handleChange} 
      />
      
      <label htmlFor="height">Height:</label>
      <input 
        type="number" 
        id="height" 
        name="height" 
        value={formData.height} 
        onChange={handleChange} 
      />
      
      <label htmlFor="backgroundColor">Background Color:</label>
      <input 
        type="text" 
        id="backgroundColor" 
        name="backgroundColor" 
        value={formData.backgroundColor} 
        onChange={handleChange} 
      />
      
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;