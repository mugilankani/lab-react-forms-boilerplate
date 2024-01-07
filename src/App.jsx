import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const initialValue = { firstName: '', lastName: '', email: '', phone: '' };
  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      setSuccessMessage('Registration successful!');
    }
  };

  useEffect(() => {
    setSuccessMessage('');
  }, [formValues]);

  const validate = () => {
    const errors = {};
    if (!formValues.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formValues.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    }
    if (!formValues.phone) {
      errors.phone = 'Phone no is required';
    }
    return errors;
  };

  return (
    <div className='background'>
      <div className='Main'>
        {successMessage && <div className='successMessage'>{successMessage}</div>}
        <form onSubmit={onSubmit} className='formcls'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formValues.firstName}
            onChange={handleChange}
          />
          {formError.firstName && <p>{formError.firstName}</p>}
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formValues.lastName}
            onChange={handleChange}
          />
          {formError.lastName && <p>{formError.lastName}</p>}
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={formValues.email}
            onChange={handleChange}
          />
          {formError.email && <p>{formError.email}</p>}
          <input
            type='text'
            name='phone'
            placeholder='Phone No'
            value={formValues.phone}
            onChange={handleChange}
          />
          {formError.phone && <p>{formError.phone}</p>}
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
