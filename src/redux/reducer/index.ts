import { combineReducers } from 'redux';
import todos from './todos';
import filters from './filters';

const rootReducer = combineReducers({
  todos,
  filters,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
