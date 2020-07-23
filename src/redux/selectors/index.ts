import { createSelector } from 'reselect';
import { searchItems, filterItems } from '../../utils';
import { RootState } from '../reducer';
import { Todo } from '../types';

export const itemsSelector = (state: RootState): Array<Todo> => state.todos.items;
export const searchTitleSelector = (state: RootState): string => state.filters.searchTitle;
export const statusSelector = (state: RootState): string => state.filters.statusFilter;
export const loadingSelector = (state: RootState): boolean => state.todos.loading;
export const errorSelector = (state: RootState): null | string => state.todos.error;

export const filterSelector = createSelector(
  itemsSelector,
  searchTitleSelector,
  statusSelector,
  (items, searchTitle, statusFilter) => searchItems(filterItems(items, statusFilter), searchTitle),
);
