import { Filter, FilterField } from './SearchForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterSlice';

export const SearchForm = () => {
  const filter = useSelector(getFilter);
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
