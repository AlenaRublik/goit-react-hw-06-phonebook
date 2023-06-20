import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Filter by name or number
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(updateFilterValue(e.target.value))}
      />
    </Label>
  );
};
