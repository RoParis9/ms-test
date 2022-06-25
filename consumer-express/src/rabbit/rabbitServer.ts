
import { Channel,Message, Connection, connect } from "amqplib";


export class rabbitmqServer{
  private conn: Connection;
  private channel: Channel;

  constructor(private uri:string){}

  async connect():Promise<void>{
    this.conn = await connect(this.uri) 
    this.channel = await this.conn.createChannel()
  }

  async consumeMessages(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  } 
}
