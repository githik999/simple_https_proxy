
class client
{
    constructor(socket)
    {
        this.id = socket.remotePort
        this.stream = socket
        this.init()
    }

    init()
    {
        this.stream.on('data',(chunk)=>{
            console.log(`[${this.id}] receive data`,chunk)
            
        })

        
    }

    
}

module.exports = client