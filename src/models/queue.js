export class BufferQueue {
    constructor (size) {
        this.memory = [];
        this.size = size;
    }

    push (value) {
          this.memory.push(value);
          if(this.memory.length > this.size){
            this.memory.shift();
          }
    }

    setSize (size) {
      while(this.memory.length > size){
        this.memory.shift();
      }
      this.size = size;
    }

    get () {
        return this.memory;
    }
}
