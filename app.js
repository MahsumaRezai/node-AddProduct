const http = require('http');


const server = http.createServer((req, res) => {
    //console.log(res)
    const url = req.url;
    if (url === '/') {
        res.write('<h1> Hi I am node js and are Masoumeh</h1>')

        return res.end()
    }
    res.write('<h1> Hi I am node js</h1>')
})
server.listen(4000)