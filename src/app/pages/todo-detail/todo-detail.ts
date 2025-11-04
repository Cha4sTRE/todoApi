import {Component, OnInit} from '@angular/core';
import {IData, ITodo} from '../../model/Todo';
import {ApiTodoService} from '../../services/api-todo-service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  imports: [

  ],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail implements OnInit {

  data!: IData;
  id!: number;
  constructor(
    private apiService:ApiTodoService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
    this.apiService.getTodoFindById(this.id).subscribe(data=>{
      this.data=data.data;
    })

  }

  deleteTodoById(id:number){
    this.apiService.deleteTodoById(id).subscribe(()=>{
      this.router.navigate(['']);
    })
  }

  updateById(id:number){
    this.router.navigate(['/create/'+id]);
  }


}
