import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ICreate, IData, ITodo} from '../../model/Todo';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiTodoService} from '../../services/api-todo-service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit {
  id: number=0;
  formularioCrear!: FormGroup;
  public data:IData={
    id:0,
    title:'',
    description:'',
    priority: 0,
    isCompleted: false,
    createdAt: new Date(),
    updatedAt:new Date(),
    dueAt:null
  };
  constructor(
    private router:ActivatedRoute,
    private apiService:ApiTodoService,
    private route:Router,
    private formBuilder: FormBuilder
  ) {
    this.formularioCrear= this.formBuilder.group({
      id:'',
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: [0, Validators.required],
      isCompleted: ['', Validators.required],
      createdAt: [new Date(), Validators.required],
      updatedAt: new Date(),
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    })
    this.apiService.getTodoFindById(this.id).subscribe(data => {
      this.formularioCrear.patchValue(data.data);
    })

  }
  protected hasErrors(controlName: string, errorType: string) {
    return this.formularioCrear.get(controlName)?.hasError(errorType)
      && this.formularioCrear.get(controlName)?.touched;
  }
  enviar(){
    if (this.formularioCrear.value){
      const newData:IData= this.formularioCrear.value;
      this.apiService.putTodo(this.id,newData).subscribe(data=>{
        this.route.navigate(['']);
      })
    }
  }
}
