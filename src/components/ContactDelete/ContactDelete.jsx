import css from './contactDelete.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/reducer';
import { getFilter, getItem } from 'redux/selector';


export const ContactDelete = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  function contactsFiltr() {
    if (filter === '') {
      return false;
    }

    return contacts.filter(e => e.name.toLowerCase().includes(filter));
  }

  const filterFunc = contactsFiltr();

  const list = filterFunc ? filterFunc : contacts;

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {list.map(({ id, name, number }) => (
          <li key={id} className={css.contactListItem}>
            {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={e => dispatch(deleteContact(e.target.name))}
              name={id}
            >
              Delete
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
