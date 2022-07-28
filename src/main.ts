import { Server } from './server'

class Main {
  public start(): void {
    // Initialize server with port 3000 from params
    const server = new Server(Number(process.env.SERVER_PORT) || 3000)
    server.start()
  }
}

const main = new Main()
main.start()
