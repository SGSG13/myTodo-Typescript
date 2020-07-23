import {
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
  RESPONSE_FAIL,
  SYNC_ITEMS_SUCCESS,
  Todo,
  TodoActionTypes,
  ErrorHttpAction,
} from '../types';

export type TodoState = {
    items: Array<Todo>;
    loading: boolean;
    error: null | ErrorHttpAction;
}

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null,
};

const todos = (
  store = initialState,
  action: TodoActionTypes,
): TodoState => {
  switch (action.type) {
    case LOAD_ITEMS_REQUEST:
      return {
        ...store,
        loading: true,
      };
    case LOAD_ITEMS_SUCCESS:
    case SYNC_ITEMS_SUCCESS:
      return {
        ...store,
        items: action.payload.items,
        loading: false,
        error: null,
      };
    case RESPONSE_FAIL:
      return {
        ...store,
        error: action.error,
        loading: false,
      };
    default:
      return store;
  }
};

export default todos;
