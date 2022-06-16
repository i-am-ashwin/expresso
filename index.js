// run `node index.js` in the terminal
const http = require('http');


class Expresso {
  constructor() {
    this._stack = []
  }
  use(middleware) {
    if(typeof middleware !== 'function') {
      throw new Error("Middleware has to be a function")
    }
    this._stack.push(middleware);
  }
  listen(port, callback) {
    const handler = (req, res) => {
      this.handle(req, res, err => {
        if(err) {
          res.wrieHead(500);
          res.end('Internal Server Error');
        }
      });
    }
return http.createServer(handler).listen({port}, callback);
  }
}
