import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/ac';

const AddItemForm: FC = () => {
  const [title, setTitle] = useState('');
  const handleChangeTitle = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(ev.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (title.length < 1) return;
    dispatch(addItem(title));
    setTitle('');
  };

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      <div className="flex-fill">
        <input
          type="text"
          name="title"
          className="input"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="flex-fit">
        <button className="button" type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddItemForm;
