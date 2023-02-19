import propTypes from 'prop-types';
import css from './filterForm.module.scss';

export const FilterForm = ({ filter, handleOnChange }) => (
  <div>
    <label className={css.label}>Find contacts by Name</label>
    <input
      className={css.input}
      type="text"
      name="filter"
      placeholder="Filter"
      value={filter}
      onChange={handleOnChange}
    ></input>
  </div>
);

FilterForm.propTypes = {
  filter: propTypes.string.isRequired,
  handleOnChange: propTypes.func.isRequired,
};
