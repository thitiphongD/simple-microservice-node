const express = require('express');
const app = express();

app.get('/manga-list', function(req, res) {
    let result = {
        data: {
            item: [
                {
                    id:  1,
                    name: 'Chainsaw man'
                },
                {
                    id: 2,
                    name: 'Demon Slayer'
                },
                {
                    id: 3,
                    name: 'Attack on Titan'
                }
            ]
        }
    }
    return res.status(200).json(result)
})

app.get('/', function(req, res) {
    res.send('Welcome to call Manga!!')
})

const port = 8081;
app.listen(port, function() {
    console.log(`Server run port ${port}`);
})