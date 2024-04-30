const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Page</title><head>");
//     res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
//     res.write("</html>");
//     res.end();
//   });

server.listen(3000);
