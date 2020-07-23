import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, Logger);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
