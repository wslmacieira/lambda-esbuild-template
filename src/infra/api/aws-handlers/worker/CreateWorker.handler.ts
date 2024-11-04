import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
  Context,
  Handler,
} from "aws-lambda";
import { ExecuteWorker } from "../../../../use-cases/ExecuteWorker";

export class CreateWorkerHandler {
  constructor() { }
  handler(): Handler {
    return async (
      { body }: APIGatewayProxyEventV2,
      _context: Context
    ): Promise<APIGatewayProxyStructuredResultV2> => {
      const payload = typeof body === 'string'
        ? JSON.parse(body)
        : body
      const worker = new ExecuteWorker()
      const data = await worker.execute("./dist/shared/worker.js", [1, 2, 3])
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    };
  }
}
