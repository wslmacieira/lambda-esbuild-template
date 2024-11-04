import type { Todo } from "../domain/entities/Todo";
import type { TodoRepository } from "../domain/interfaces/TodoRepository";

export class CreateTodo {
  constructor(private todoRepository: TodoRepository) { }

  async execute(title: Todo["title"]) {
    const todo = await this.todoRepository.create(title);
    return this.presentOutput(todo)
  }

  private presentOutput(todo: Todo) {
    return {
      id: todo.id,
      title: todo.title,
      done: todo.done,
      createdAt: todo.createdAt
    }
  }
}