import { APIGatewayProxyEventV2, Callback, Context } from 'aws-lambda';
import { getAllTodosHandler, createTodoHandler } from '../src/main'

it('should be invoke getAllTodosHandler', async () => {
  const testEvent = {} as APIGatewayProxyEventV2;
  const testContext = {} as Context;
  const testCallback = {} as Callback;
  const response = await getAllTodosHandler(testEvent, testContext, testCallback);
  expect(response.statusCode).toBe(200)
})
it('should be invoke createTodoHandler', async () => {
  const testEvent = {
    "body": {
      "title": "todo 1"
    }
  } as unknown as APIGatewayProxyEventV2;
  const testContext = {} as Context;
  const testCallback = {} as Callback;
  const response = await createTodoHandler(testEvent, testContext, testCallback);
  expect(response.statusCode).toBe(200)
})
