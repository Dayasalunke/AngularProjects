import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  newTodo='';
  todos: {text:string } [] = [] 

  addTodo(){
    if(this.newTodo.trim()){
      this.todos.push({text:this.newTodo});
      this.newTodo='';
    }
  }

  removeTodo(index:number){
    this.todos.splice(index,1) 
  }
}
