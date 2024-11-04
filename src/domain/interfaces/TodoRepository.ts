import type { Todo } from "../entities/Todo";

export interface TodoRepository {
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo | null>;
  create(title: Todo["title"]): Promise<Todo>;
  update(todo: Todo): Promise<void>;
  delete(id: string): Promise<void>;
}