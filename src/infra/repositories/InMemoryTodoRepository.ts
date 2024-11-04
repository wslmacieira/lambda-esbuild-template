import { Todo } from "../../domain/entities/Todo";
import type { TodoRepository } from "../../domain/interfaces/TodoRepository";

export class InMemoryTodoRepository implements TodoRepository {
  private todos: Todo[] = []
  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findById(id: string): Promise<Todo | null> {
    return this.todos.find(todo => todo.id === id) || null;
  }

  async create(title: Todo["title"]): Promise<Todo> {
    const todo = Todo.create(title)
    this.todos.push(todo);
    return todo;
  }

  async update(todo: Todo): Promise<void> {
    const index = this.todos.findIndex(b => b.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }

  async delete(id: string): Promise<void> {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}