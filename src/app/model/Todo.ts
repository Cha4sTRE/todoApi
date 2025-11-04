export interface ITodoList {
  code:     number;
  data:     IData[];
  messages: [];
}

export interface ITodo {
  code:     number;
  data:     IData
  messages: any[];
}
export interface IData {
  id:          number;
  title:       string;
  description: string;
  isCompleted: boolean;
  priority:    number;
  dueAt:       null;
  createdAt:   Date;
  updatedAt:   Date;
}
export interface ICreate{
  title:       string;
  description: string;
  priority:    number;
  createdAt:   Date;
}
