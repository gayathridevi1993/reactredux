var http= require('http');
const fs = require('fs');
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('Hello World!')
    
    fs.readFile('sample.json', (err, data) => {  
        if (err) throw err;
        let sample = JSON.parse(data);
        res.send(sample);
        
    });

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))