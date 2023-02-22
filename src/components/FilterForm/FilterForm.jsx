import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/reducer';
import { getFilter } from 'redux/selector';
import css from './filterForm.module.scss';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <label className={css.label}>Find contacts by Name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Filter"
        value={filter}
        onChange={e =>
          dispatch(filterValue(e.target.value.toLowerCase()))
        }
      ></input>
    </div>
  );
};
