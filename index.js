const express = require('express');
const redis = require('redis');
const process = require('process')

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0)

app.get('/', (req, res) => {
    process.exit(0); // 0 = Developer Shutdown, > 1 = Error Shutdown
    client.get('visits', (err, visists) => {
        res.send('Number of visits is ' + visists);
        client.set('visits', parseInt(visists) + 1);
    })
});

app.listen(8081, () => {
    console.log('Listening on 8081');
});