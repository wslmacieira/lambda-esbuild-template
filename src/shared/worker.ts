import { parentPort, workerData } from "worker_threads";

async function runWorkerThread() {
  const response = await Promise.all(workerData.map((id: any) => request(id)))
  parentPort?.postMessage(response)
}

runWorkerThread()

async function request(id: any) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => json);
}
