import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, loadingSelector, errorSelector } from '../../redux/selectors';
import { doneItem, removeItem, getItems } from '../../redux/ac';
import TodoListItem from '../TodoListItem';
import Loader from '../Loader';
import { Todo } from '../../redux/types';
import { RootState } from '../../redux/reducer';

const TodoList: FC = () => {
  const items = useSelector<RootState, Array<Todo>>((state) => filterSelector(state));
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const doneItemDispatch = (id: string): void => {
    dispatch(doneItem(id));
  };
  const removeItemDispatch = (id: string): void => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (isLoading) return <Loader />;
  const errorMessage = error && (
  <div>
    <span>Error: </span>
    {error}
  </div>
  );
  const isEmpty = items.length === 0 && !isLoading;
  const emptyMessage = isEmpty && <div className="text-center">List is empty :(</div>;
  const classNameForList = `todo-list ${isEmpty ? 'todo-list_empty' : ''}`;
  return (
    <div>
      {errorMessage}
      <div className={classNameForList}>
        {emptyMessage}
        <ul>
          {
                        items.map((item) => (
                          <TodoListItem
                            key={item.id}
                            doneItem={doneItemDispatch}
                            removeItem={removeItemDispatch}
                            {...item}
                          />
                        ))
                    }
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
