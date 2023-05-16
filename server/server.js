const express = require('express')
const data = require('./data.json')
const app = express()
const fs = require('fs')

fs.readFile('./data.json','utf-8',(err,jsonData) => {
    if(err){
        console.log(err)
    } else {
        try {
             const data = JSON.parse(jsonData)
        } catch {
            console.log('error parsing data', err)
        }
    }
})


// დაას დააფდეითება
fs.writeFileSync('./data.json', JSON.stringify('რაღაც ახალი დათა'));

app.get("/api", (req, res) => {
    res.json({
        "data": data
    })
})

app.listen(3500, () => { console.log("server started on port 3500") })