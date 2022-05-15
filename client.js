const https = require('https')

class client
{
    constructor(socket)
    {
        this.stream = socket
        this.id = socket.remotePort
        this.init()
    }

    init()
    {
        this.stream.on('data',(buf)=>{
            if(buf.toString().includes(':443'))
            {
                let arr = buf.toString().split('\n')
                for (const v of arr)
                {
                    if(v.startsWith('Host'))
                    {
                        let vec = v.split(':')
                        this.https_get(vec[1])
                    }
                }
            }
        })
    }

    https_get(host)
    {
        console.log(host)
        https.get('https://www.baidu.com',(res)=>{
            let data = []
            console.log(res.statusCode,res.statusMessage)
            res.on('data',(chunk)=>{
                data.push(chunk)
            })
            res.on('end',()=>{
                console.log(data.toString())
            })
        })
    }
}

module.exports = client