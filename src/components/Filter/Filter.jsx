import { FilterTitle, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterInput = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <FilterTitle>
      Find contact by name:
      <FilterInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={filterInput}
        value={filter}
      />
    </FilterTitle>
  );
};
