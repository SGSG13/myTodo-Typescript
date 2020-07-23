import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../../../redux/ac';
import { searchTitleSelector } from '../../../redux/selectors';

const Search: FC = () => {
  const searchTitle = useSelector(searchTitleSelector);
  const dispatch = useDispatch();
  const handleChangeSearch = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearch(ev.target.value));
  };
  return (
    <div className="flex-fill">
      <input
        className="input"
        type="text"
        name="search"
        placeholder="Search"
        value={searchTitle}
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default Search;
