import React, { FC } from 'react';

type TodoListItemProps = {
    id: string;
    title: string;
    done: boolean;
    doneItem: (id: string) => void;
    removeItem: (id: string) => void;
}

const TodoListItem: FC<TodoListItemProps> = (props) => {
  const {
    id, title, done, doneItem, removeItem,
  } = props;
  const handleDone = (todoId: string) => (): void => { if (!done) doneItem(todoId); };
  const handleRemove = (todoId: string) => (): void => { removeItem(todoId); };
  const classNameForItem = `todo-list__title ${done ? 'todo-list__title_done' : ''}`;
  return (
    <li className="todo-list__item">
      <div className="flex-fill">
        <div
          className={classNameForItem}
          onClick={handleDone(id)}
        >
          {title}
        </div>
      </div>
      <div className="flex-fit">
        <button
          className="button"
          onClick={handleRemove(id)}
          type="button"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
