const http = require("http");
const obj={
    fname:"devendra kumar",
    lname:"mali"
};
const server = http.createServer(function(req,res){
      res.write("<h1>this is our first server</h1>");
      res.write("\nnormal text is here also\n")
      res.write(JSON.stringify({name:"devendra"}));
      res.write(JSON.stringify(obj));
      res.write("<h1>JSON.stringify(obj)</h1>");
      res.end("\nend of server");
});
server.listen(1000);