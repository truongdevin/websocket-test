// import ws from "nodejs-websocket"
const ws = require("nodejs-websocket")

const server = ws.createServer((conn) => {
    console.log("New connection")
    // conn.on("text", (str) => {
    //     console.log("Received "+str)
    //     conn.sendText(str.toUpperCase() + "!!!")
    // })
    // conn.on("close", (code, reason) => {
    //     console.log("Connection closed")
    // })

    function randomNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    setInterval(() => {
        let path = []
        for ( let i = 0; i < randomNum(3,6); i++ ) {
            path.push({x: randomNum(0,500), y: randomNum(0,500)})
        }

        conn.sendText(JSON.stringify(path))
    },
    1000)
}).listen(8001)