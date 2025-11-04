import {Component, OnInit} from '@angular/core';
import { ITodoList} from '../../model/Todo';
import {ApiTodoService} from '../../services/api-todo-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  todo:ITodoList|undefined;

  constructor(private apiService:ApiTodoService) {}

  ngOnInit(): void {

    this.apiService.getTodo().subscribe(data=>{
      this.todo=data;
    })

  }

}
