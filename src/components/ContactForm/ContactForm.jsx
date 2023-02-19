import propTypes from 'prop-types';
import { useState } from 'react';
import css from './contactForm.module.scss';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleOnChangeName = e => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleOnSubmit}>
      <label className={css.label}>Name </label>
      <input
        className={css.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleOnChangeName}
      />
      <label className={css.label}>Number </label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleOnChangeNumber}
      />
      <button className={css.formOnbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
