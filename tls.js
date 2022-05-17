const fs = require('fs')
const tls = require('tls')
const client = require('./client')


const options = {
    key: fs.readFileSync('127.0.0.1.key'),
    cert: fs.readFileSync('127.0.0.1.cert')
}

const server = tls.createServer(options).listen(443)

server.on('connection',(net_socket)=>{
    console.log('connection establish',net_socket.remotePort)
    net_socket.on('data',(buf)=>{
        console.log('net_socket data',buf)
    })
})

server.on('secureConnection',(tls_socket)=>{
    console.log('secureConnection establish',tls_socket.remotePort,tls_socket.getProtocol())

    tls_socket.on('data',(buf)=>{
        console.log('tls_socket data',buf.toString())
    })

    tls_socket.on('end',()=>{

    })
    
})
