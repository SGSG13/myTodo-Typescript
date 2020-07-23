import {
  all, call, put, takeEvery, spawn, take,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  SagaIterator,
  EventChannel,
} from '@redux-saga/core';
import {
  loadItemsSuccess,
  syncItemsSuccess,
  responseFail,
} from '../ac';
import {
  ADD_ITEM_REQUEST,
  DONE_ITEM_REQUEST,
  LOAD_ITEMS_REQUEST,
  REMOVE_ITEM_REQUEST,
  AddItemRequestAction,
  DoneItemRequestAction,
  RemoveItemRequestAction,
  Todos,
} from '../types';
import api from '../../apiService';

export function* getItemsSaga(): SagaIterator {
  try {
    const { items } = yield call(api.getItems);
    yield put(loadItemsSuccess(items));
  } catch (error) {
    yield put(responseFail(error));
  }
}

export function* addItemSaga(action: AddItemRequestAction): SagaIterator {
  try {
    yield call(api.addItem, action.payload.title);
  } catch (error) {
    yield put(responseFail(error));
  }
}

export function* doneItemSaga(action: DoneItemRequestAction): SagaIterator {
  const { id } = action.payload;
  try {
    yield call(api.doneItem, id);
  } catch (error) {
    yield put(responseFail(error));
  }
}

export function* removeItemSaga(action: RemoveItemRequestAction): SagaIterator {
  const { id } = action.payload;
  try {
    yield call(api.removeItem, id);
  } catch (error) {
    yield put(responseFail(error));
  }
}

const createTodoSocket = (): EventChannel<Todos> => eventChannel((emmit) => {
  const socket = api.socketConnection();
  const callback = (data: Todos): unknown => emmit(data);
  socket.on('changeTodo', callback);
  return (): SocketIOClient.Emitter => socket.removeListener('changeTodo', callback);
});

export function* realtimeSyncSaga(): SagaIterator {
  const channel = yield call(createTodoSocket);
  try {
    while (true) {
      const { items } = yield take(channel);
      yield put(syncItemsSuccess(items));
    }
  } finally {
    yield call([channel, channel.close]);
  }
}

export default function* rootSaga(): SagaIterator {
  yield spawn(realtimeSyncSaga);
  yield all([
    takeEvery(LOAD_ITEMS_REQUEST, getItemsSaga),
    takeEvery(DONE_ITEM_REQUEST, doneItemSaga),
    takeEvery(REMOVE_ITEM_REQUEST, removeItemSaga),
    takeEvery(ADD_ITEM_REQUEST, addItemSaga),
  ]);
}
