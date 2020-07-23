import {
  CHANGE_SEARCH,
  CHANGE_STATUS,
  TodoActionTypes,
} from '../types';

type FiltersState = {
    searchTitle: string;
    statusFilter: string;
}

const initialState: FiltersState = {
  searchTitle: '',
  statusFilter: 'all',
};

const filters = (
  store = initialState,
  action: TodoActionTypes,
): FiltersState => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...store,
        searchTitle: action.payload.searchTitle,
      };
    case CHANGE_STATUS:
      return {
        ...store,
        statusFilter: action.payload.statusFilter,
      };
    default:
      return store;
  }
};

export default filters;
