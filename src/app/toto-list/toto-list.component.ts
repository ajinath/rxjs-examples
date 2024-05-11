import { Component, OnInit, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { Todo, TodoService } from './toto.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-toto-list',
  templateUrl: './toto-list.component.html',
  styleUrl: './toto-list.component.css',
  providers: [ NgFor]
})
export class TotoListComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.minLength(2) ]),
    completed: new FormControl(false)
  })

  todos: Todo[] = [];
  submitted = false;
  activeTodoIndex: number = -1; 

  @ViewChildren('todo') todoList!: QueryList<HTMLElement>;

  constructor( private readonly todoService: TodoService) {
   
  }

  get actionStr() {
    return this.activeTodoIndex > -1 ? 'Update' : 'Add'
  }

  get textControl() {
    return this.todoForm.get('text');
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleTodoStatus(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) { 
    this.todoService.deleteTodo(todo);
  }

  editTodo(todo: Todo) {
    this.activeTodoIndex = this.todos.indexOf(todo);
    this.todoForm.patchValue({ ...todo })
  }

  updateTodo() {
    if(this.todoForm.valid) {
      this.todoService.updateTodo(this.todoForm.value, this.activeTodoIndex);
      this.activeTodoIndex = -1;
      this.todoForm.reset();
    }
  }

  createTodo() {
    if(this.todoForm.valid) {
      this.todos.unshift(this.todoForm.value);
      this.todoForm.reset();
    }
  }

  submitTodo()  {
    if(this.activeTodoIndex > -1) {
      this.updateTodo();
    } else {
      this.createTodo();
    }
  }

}
