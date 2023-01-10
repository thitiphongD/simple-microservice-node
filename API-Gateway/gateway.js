const gateway = require('fast-gateway');

const port = 9001;
const server = gateway({
    routes: [
        {
            prefix: "/manga",
            target: "http://localhost:8081/",
            hooks: {}
        },
        {
            prefix: '/movie',
            target: "http://localhost:8082/",
            hooks: {}
        }
    ]
});

server.get('/', function(req, res) {
    res.send('Gateway call!!!')
})

server.start(port).then(server=>{
    console.log(`Gate way run ${port}`);
})