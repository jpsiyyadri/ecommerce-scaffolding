const http = require("http")

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    res.setHeader('Content-type', 'text/html')
    return res.write("Hello world")
})

server.listen(5000)
