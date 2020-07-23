import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../../redux/ac';
import { statusSelector } from '../../../redux/selectors';

type Button = {
    label: string;
    name: string;
}

const buttons: Array<Button> = [
  { label: 'All', name: 'all' },
  { label: 'Done', name: 'done' },
  { label: 'Active', name: 'active' },
];

const StatusFilter: FC = () => {
  const statusFilter = useSelector(statusSelector);
  const dispatch = useDispatch();
  const handleChangeStatus = (name: string) => (): void => {
    dispatch(changeStatus(name));
  };
  return (
    <div className="flex-fit">
      {
                buttons.map((button) => (
                  <button
                    className={`button ${statusFilter === button.name ? 'button_active' : ''}`}
                    onClick={handleChangeStatus(button.name)}
                    key={button.name}
                    type="button"
                  >
                    {button.label}
                  </button>
                ))
            }
    </div>
  );
};

export default StatusFilter;
