import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { getFilter } from '../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <input
      type="text"
      placeholder="Пошук..."
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};
