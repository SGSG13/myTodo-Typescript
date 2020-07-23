export type Todo = {
    done: boolean;
    id: string;
    title: string;
}

export type Todos = {
    items: Array<Todo>;
}

export type ErrorHttpAction = string;

type PayloadId = {
    id: string;
}

type PayloadTitle = {
    title: string;
}

type PayloadStatusFilter = {
    statusFilter: string;
}

type PayloadSearchTitle = {
    searchTitle: string;
}

export const LOAD_ITEMS_REQUEST = 'LOAD_ITEMS_REQUEST';
export type LoadItemsRequestAction = {
    type: typeof LOAD_ITEMS_REQUEST;
};

export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';
export type LoadItemsSuccessAction = {
    type: typeof LOAD_ITEMS_SUCCESS;
    payload: Todos;
};

export const SYNC_ITEMS_SUCCESS = 'SYNC_ITEMS_SUCCESS';
export type SyncItemsSuccessAction = {
    type: typeof SYNC_ITEMS_SUCCESS;
    payload: Todos;
};

export const RESPONSE_FAIL = 'RESPONSE_FAIL';
export type ResponseFailAction = {
    type: typeof RESPONSE_FAIL;
    error: string;
};

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export type AddItemRequestAction = {
    type: typeof ADD_ITEM_REQUEST;
    payload: PayloadTitle;
};

export const DONE_ITEM_REQUEST = 'DONE_ITEM_REQUEST';
export type DoneItemRequestAction = {
    type: typeof DONE_ITEM_REQUEST;
    payload: PayloadId;
};

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export type RemoveItemRequestAction = {
    type: typeof REMOVE_ITEM_REQUEST;
    payload: PayloadId;
};

export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export type ChangeSearchAction = {
    type: typeof CHANGE_SEARCH;
    payload: PayloadSearchTitle;
};

export const CHANGE_STATUS = 'CHANGE_STATUS';
export type ChangeStatusAction = {
    type: typeof CHANGE_STATUS;
    payload: PayloadStatusFilter;
};

export type TodoActionTypes =
    | LoadItemsRequestAction
    | SyncItemsSuccessAction
    | LoadItemsSuccessAction
    | ResponseFailAction
    | AddItemRequestAction
    | DoneItemRequestAction
    | RemoveItemRequestAction
    | ChangeSearchAction
    | ChangeStatusAction;
