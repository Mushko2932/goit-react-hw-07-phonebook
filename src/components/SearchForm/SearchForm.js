import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterSlice';
import { Filter, FilterField } from './SearchForm.styled';

export const SearchForm = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setContactsFilter(e.target.value));
  };
  return (
    <Filter>
      Find contacts by name
      <FilterField
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="search"
      />
    </Filter>
  );
};
