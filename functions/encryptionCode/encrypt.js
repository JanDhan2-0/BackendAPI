var b64string = "aHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9qYW5kaGFuZGFyc2hha2FwaS5hcHBzcG90LmNvbS9vL1BBTiUyRnBhbl9jYXJkNTU2NDIwP2FsdD1tZWRpYSZ0b2tlbj1jNzU5NjJjMS0wMzQ4LTRjNzQtYTQ5Mi00MTFlZTY0ZDg4N2U=";
var buf = Buffer.from(b64string, 'base64'); 
var decode = buf.toString('utf8');
console.log(decode);