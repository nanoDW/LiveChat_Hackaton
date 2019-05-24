const express = require("express");
const LiveChatApi = require('livechatapi').LiveChatApi;

const API_PORT = 3001;

const app = express();

// testowanie działania API
const api = new LiveChatApi('kamila.spodymek@gmail.com', 'c73e145c22855a6775ad2424476c9b6f')

app.get('/agents', (req, res) => {
    api.agents.list(function (data) {
        res.send(data)
    });
})

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
