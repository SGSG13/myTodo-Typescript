import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { itemsSelector } from '../../redux/selectors';

const Header: FC = () => {
  const items = useSelector(itemsSelector);
  const doneCount = items.filter((item) => item.done).length;
  const toDoCount = items.length - doneCount;

  return (
    <div className="header">
      <div className="header__title">
        <h1>ToDo List</h1>
      </div>
      <p>
        <span>{toDoCount}</span>
        <span> more to do, </span>
        <span data-id="done-count">{doneCount}</span>
        <span> done</span>
      </p>
    </div>
  );
};

export default Header;
