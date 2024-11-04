import { CreateTodoHandler } from "./infra/api/aws-handlers/todo/CreateTodo.handler";
import { CreateWorkerHandler } from "./infra/api/aws-handlers/worker/CreateWorker.handler";
import { GetAllTodosHandler } from "./infra/api/aws-handlers/todo/GetAllTodos.handler";
import { InMemoryTodoRepository } from "./infra/repositories/InMemoryTodoRepository";
import { CreateTodo } from "./use-cases/CreateTodo";
import { GetAllTodos } from "./use-cases/GetAllTodos";

const todoRepository = new InMemoryTodoRepository();
const createTodo = new CreateTodo(todoRepository)
const getAllTodos = new GetAllTodos(todoRepository)
export const createTodoHandler = new CreateTodoHandler(createTodo).handler()
export const getAllTodosHandler = new GetAllTodosHandler(getAllTodos).handler()
export const createWorkerHandler = new CreateWorkerHandler().handler()