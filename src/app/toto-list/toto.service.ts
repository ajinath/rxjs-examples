import { Injectable } from "@angular/core";

export interface Todo {
    text: string
    completed: boolean
}

@Injectable({
    providedIn: 'root'
})

export class TodoService { 

    private todos = [ 
        { text: 'Lorem text textLorem text', completed: false },
        { text: 'Lorem text Lorem textLorem textLorem textLorem', completed: false },
        { text: 'Lorem text Lorem textLorem textLorem textLorem', completed: true },
        { text: 'Lorem text Lorem textLorem textLorem textLorem', completed: false }
    ]

    getTodos() {
        return this.todos;
    }

    deleteTodo(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    updateTodo(todo: Todo, index: number) {
        this.todos[index] = todo;
    }

    createTodo(todo: Todo) {
        this.todos.unshift(todo)
    }

}