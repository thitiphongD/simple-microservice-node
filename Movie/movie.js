const express = require('express');
const app = express();

app.get('/movie-list', function(req, res) {
    let result = {
        data: {
            item: [
                {
                    id:  1,
                    name: 'Jack Ryan'
                },
                {
                    id: 2,
                    name: 'Jason Bourne'
                },
                {
                    id: 3,
                    name: 'James Bond'
                }
            ]
        }
    }
    return res.status(200).json(result)
})

app.get('/', function(req, res) {
    res.send('Welcome to call Movie!!')
})


const port = 8082;
app.listen(port, function() {
    console.log(`Server run port ${port}`);
})