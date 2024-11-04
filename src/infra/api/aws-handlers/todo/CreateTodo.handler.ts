import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
  Context,
  Handler,
} from "aws-lambda";
import type { CreateTodo } from "../../../../use-cases/CreateTodo";

export class CreateTodoHandler {
  constructor(private readonly createTodo: CreateTodo) { }
  handler(): Handler {
    return async (
      { body }: APIGatewayProxyEventV2,
      _context: Context
    ): Promise<APIGatewayProxyStructuredResultV2> => {
      const payload = typeof body === 'string'
        ? JSON.parse(body)
        : body
      const todo = await this.createTodo.execute(payload.title)
      return {
        statusCode: 200,
        body: JSON.stringify(todo),
      };
    };
  }
}


