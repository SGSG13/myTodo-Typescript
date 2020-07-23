import { Todo } from '../redux/types';

export function filterItems(items: Array<Todo>, filter: string): Array<Todo> {
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => (!item.done));
    case 'done':
      return items.filter((item) => item.done);
    default: return items;
  }
}

export function searchItems(items: Array<Todo>, search: string): Array<Todo> {
  if (search.length === 0) return items;
  return items.filter((item) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
}
