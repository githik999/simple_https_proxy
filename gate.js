const net = require('net')
const client = require('./client')

const server = net.createServer().listen(1080)

server.on('connection',(socket)=>{
    new client(socket)
})

server.on('error',(err)=>{
    console.log(err.message)
})