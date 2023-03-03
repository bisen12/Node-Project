import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('please turn of the motor');
  setTimeout(() =>{
    console.log('hurry up! please turn of the moter water is wasting')
  },5000);
 
});
console.log("motor is on")
myEmitter.emit('event');
console.log("the motor is still on")


