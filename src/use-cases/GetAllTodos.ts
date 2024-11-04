import type { TodoRepository } from "../domain/interfaces/TodoRepository";

export class GetAllTodos {
  constructor(private todoRepository: TodoRepository) { }

  async execute() {
    return await this.todoRepository.findAll();
  }
}