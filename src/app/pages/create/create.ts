import {Component} from '@angular/core';
import {ICreate} from '../../model/Todo';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiTodoService} from '../../services/api-todo-service';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {

  formularioCrear: FormGroup;
  constructor(
    private apiService:ApiTodoService,
    private router:Router,
    private formBuilder: FormBuilder,
  ) {
    this.formularioCrear= this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      createdAt: [new Date(), Validators.required],
    })
  }

  protected hasErrors(controlName: string, errorType: string) {
    return this.formularioCrear.get(controlName)?.hasError(errorType)
      && this.formularioCrear.get(controlName)?.touched;
  }

  enviar(){
    if(this.formularioCrear.valid){
      const nuevoTodo:ICreate=this.formularioCrear.value;
      this.apiService.postTodo(nuevoTodo).subscribe({
        next: ()=>{
          console.log("Todo creado correctamente");
          this.router.navigate(['']);
        },
        error: ()=>console.log('Error al crear',nuevoTodo),
      })
    }else{
      console.warn('Formulario invalido')
    }
  }



}
