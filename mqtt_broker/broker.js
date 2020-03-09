const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

server.listen(port, () => {
    console.log('mqtt broker is listening port: ', port)
})