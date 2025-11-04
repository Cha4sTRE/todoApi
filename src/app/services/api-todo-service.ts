import { Injectable } from '@angular/core';
import {ICreate, IData, ITodo, ITodoList} from '../model/Todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTodoService {

  baseUrl:string='https://todoapitest.juansegaliz.com/todos'
  todos: ITodo | undefined;

  constructor(private http:HttpClient) {}

  public getTodo():Observable<ITodoList>{
    return this.http.get<ITodoList>(this.baseUrl);
  }

  public getTodoFindById(id:number):Observable<ITodo>{
    return this.http.get<ITodo>(`${this.baseUrl}/${id}`);
  }
  public postTodo(todo:ICreate):Observable<ICreate>{
    return this.http.post<ICreate>(this.baseUrl,todo)
  }
  public putTodo(id:number,todo:IData):Observable<IData>{
    return this.http.put<IData>(`${this.baseUrl}/${id}`,todo)
  }
  public deleteTodoById(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
