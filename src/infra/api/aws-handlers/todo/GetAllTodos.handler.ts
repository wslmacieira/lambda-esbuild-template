import type {
  Context,
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";
import type { GetAllTodos } from "../../../../use-cases/GetAllTodos";

export class GetAllTodosHandler {
  constructor(private readonly getAllTodos: GetAllTodos) { }
  handler(): Handler {
    return async (
      _event: APIGatewayProxyEventV2,
      _context: Context
    ): Promise<APIGatewayProxyStructuredResultV2> => {
      const todos = await this.getAllTodos.execute()
      return {
        statusCode: 200,
        body: JSON.stringify(todos),
      };
    };
  }
}


