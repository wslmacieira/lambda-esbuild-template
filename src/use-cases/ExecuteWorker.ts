import { Worker } from "worker_threads";

export class ExecuteWorker {
  constructor() { }

  async execute(file: any, data: any) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(file, {
        workerData: data
      })
      worker.on("message", resolve)
      worker.on("error", reject)
      worker.on("exit", console.log)

    }).then(async (result) => {
      await this.sleep(10)
      return result
    })
  }
  private sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}