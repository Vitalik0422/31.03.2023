const { log } = require('console')
const fs = require('fs-extra')


const http = require('http')


const arr = [
    { id: 1, topic: 'hello' },
    { id: 2, topic: 'I want to store a JPEG file in an Attachment object. The source of this JPEG file is an HttpRequest Object' }
]

const server = http.createServer((req, res) => {
    if (req.url === "/cat.jpg") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg");
        fs.readFile("./image/cat.jpg", (err, image) => {
            res.end(image);
            return
        });  // return res.end('mother fucker');
    }
    else if (req.url == req.url.match(/\/\d+$/ig)) {
        for (let i = 0; arr.length; i++) {
            let id = Number(req.url.match(/\d+$/ig))
            if (arr[i].id == id) {
                return res.end(arr[i].topic);;
            }
            return res.end('not found 404')
        }
    }
    else {
        res.end('not found 404')
    }
})

server.listen(2000)
