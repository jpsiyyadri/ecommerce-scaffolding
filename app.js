const http = require("http")

const server = http.createServer((req, res) => {
    console.log("request has been received")
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-type', 'text/html')
    console.log("response has been served")
    return res.write("Hello world")
})

console.log("started node server on port 5000")
server.listen(5000)
