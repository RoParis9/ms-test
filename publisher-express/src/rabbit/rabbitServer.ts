import {Channel,connect, Connection, Message} from 'amqplib'


class rabbitServer{
  private conn: Connection;
  private channel: Channel;

  constructor(private uri:string){}

  async connect():Promise<void>{
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
  }

  async publishInQueue(queue:string,message:string){
    this.channel.sendToQueue(queue, Buffer.from(message))
  }
  async publishInExchange(exchange:string,routingKey:string,message:string):Promise<boolean>{
    return this.channel.publish(exchange,routingKey,Buffer.from(message))
  }

  async consumeMessages(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  } 

};

export default rabbitServer
