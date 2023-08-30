const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("<h1>hello node !!!</h1>/n")
});

server.listen(8000,() => {
    console.log("listening to port 8000")
})