import {
  LOAD_ITEMS_REQUEST,
  SYNC_ITEMS_SUCCESS,
  LOAD_ITEMS_SUCCESS,
  RESPONSE_FAIL,
  ADD_ITEM_REQUEST,
  DONE_ITEM_REQUEST,
  REMOVE_ITEM_REQUEST,
  CHANGE_SEARCH,
  CHANGE_STATUS,
  LoadItemsRequestAction,
  SyncItemsSuccessAction,
  LoadItemsSuccessAction,
  ResponseFailAction,
  AddItemRequestAction,
  DoneItemRequestAction,
  RemoveItemRequestAction,
  ChangeSearchAction,
  ChangeStatusAction,
  Todo,
} from '../types';

export function getItems(): LoadItemsRequestAction {
  return {
    type: LOAD_ITEMS_REQUEST,
  };
}

export function loadItemsSuccess(items: Array<Todo>): LoadItemsSuccessAction {
  return {
    type: LOAD_ITEMS_SUCCESS,
    payload: { items },
  };
}

export function syncItemsSuccess(items: Array<Todo>): SyncItemsSuccessAction {
  return {
    type: SYNC_ITEMS_SUCCESS,
    payload: { items },
  };
}

export function responseFail(error: string): ResponseFailAction {
  return {
    type: RESPONSE_FAIL,
    error,
  };
}

export function addItem(title: string): AddItemRequestAction {
  return {
    type: ADD_ITEM_REQUEST,
    payload: { title },
  };
}

export function doneItem(id: string): DoneItemRequestAction {
  return {
    type: DONE_ITEM_REQUEST,
    payload: { id },
  };
}

export function removeItem(id: string): RemoveItemRequestAction {
  return {
    type: REMOVE_ITEM_REQUEST,
    payload: { id },
  };
}

export function changeSearch(searchTitle: string): ChangeSearchAction {
  return {
    type: CHANGE_SEARCH,
    payload: { searchTitle },
  };
}

export function changeStatus(statusFilter: string): ChangeStatusAction {
  return {
    type: CHANGE_STATUS,
    payload: { statusFilter },
  };
}
