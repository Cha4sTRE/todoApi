import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Create} from './pages/create/create';
import {TodoDetail} from './pages/todo-detail/todo-detail';
import {Update} from './pages/update/update';

export const routes: Routes = [
  {path:'',component:Home},
  {path:'create',component:Create},
  {path:'todo/:id',component:TodoDetail},
  {path:'create/:id',component:Update},
  {path:'**',redirectTo:''}
];
