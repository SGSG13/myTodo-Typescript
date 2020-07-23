import axios, { AxiosPromise } from 'axios';
import io from 'socket.io-client';
import { Todo, ErrorHttpAction } from '../redux/types';

type ResolveResponseType = <R>(response: AxiosPromise) => Promise<R | ErrorHttpAction>;
type TodoApiResponse<R> = Promise<R | ErrorHttpAction>;
type TodoItemsResponse = {
    items: Array<Todo>;
}
type TodoApiActionResponse = {
    result: string;
}

class Api {
    url = {
      GET_TODOS: '/api/todos',
      TODO: '/api/todo/',
      SOCKET: 'http://localhost:3001',
    };

    getItems = (): TodoApiResponse<TodoItemsResponse> => (
      this.resolveResponse<TodoItemsResponse>(axios.get(this.url.GET_TODOS))
    )

    addItem = (title: string): TodoApiResponse<TodoApiActionResponse> => (
      this.resolveResponse(axios.post(this.url.TODO, { title }))
    );

    doneItem = (id: string): TodoApiResponse<TodoApiActionResponse> => (
      this.resolveResponse(axios.put(this.url.TODO + id))
    );

    removeItem = (id: string): TodoApiResponse<TodoApiActionResponse> => (
      this.resolveResponse(axios.delete(this.url.TODO + id))
    );

    resolveResponse: ResolveResponseType = async (response) => {
      try {
        const { data } = await response;
        return data;
      } catch (error) {
        return error.response.data.error ? error.response.data.error.message : 'Something went wrong';
      }
    };

    socketConnection = (): SocketIOClient.Socket => io(this.url.SOCKET);
}

export default new Api();
