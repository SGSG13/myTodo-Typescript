import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../redux';

import Header from './Header';
import FilterContainer from './Filters/FilterContainer';
import TodoList from './TodoList';
import AddItemForm from './AddItemForm';

import '../sass/main.scss';

const App: FC = () => (
  <div className="main-app">
    <Provider store={store}>
      <Header />
      <FilterContainer />
      <TodoList />
      <AddItemForm />
    </Provider>
  </div>
);

export default App;
