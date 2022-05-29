const twitterClient = require('./init')
const axios = require('axios')
const app = require('express')();

twitterClient.tweets.search({
    q: '#ReactJS',
    result_type: 'recent', //get latest tweets with this hashtag
}).then ((response) => {
    if (response.statuses) {
        response.statuses.forEach((status) => {
            twitterClient.tweets.statusesRetweetById({
                id: status.id_str
            })
            .then ((resp) => console.log(`Retweeted tweet #${status.id}`))
            .catch ((err) => console.error(err))
        })
    }
}).catch ((err) => console.error(err))

