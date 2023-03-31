const moment = require('moment')
const fs = require('fs-extra')

fs.readFileSync('./txt.txt','utf-8')


const http = require('http')

const arr = [
    {id: 1, topic:'hello'}
]

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url = '/img'){
        res.end()
    }
    let id = Number(req.url.match(/\d+$/ig))
    for(let i = 0; i < arr.length; i++){
        if(id === arr[i].id){
            res.end(arr[i].topic)
        }
        else {
            res.end('mother fucker')
        }
    }
})

server.listen(3001)
console.log('run')