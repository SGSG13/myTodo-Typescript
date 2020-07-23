import React, { FC } from 'react';
import Search from './Search';
import StatusFilter from './StatusFilter';

const FilterContainer: FC = () => (
  <div className="filters">
    <Search />
    <StatusFilter />
  </div>
);

export default FilterContainer;
