const { Client } = require("pg")

const client = new Client({
    host : "dpg-cfvqqbvdvk4rro0a7pug-a",
    user :"karthikeyan",
    port : 5432,
    password : "2X6xh3zXLG5qHtxpaPAcFbYtshMq7gY7",
    database : "musicfolks",
    ssl: true
});

client.connect(err => {
    if (err) {
        console.log(err);
        return;
    }  
})
module.exports = client;