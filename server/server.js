var express = require('express');
var app = express();
require('dotenv').config();
const GoogleAuth = require("google-auth-library").GoogleAuth;
const cors = require("cors");

app.use(cors());

app.get('/hello', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true); // you probably dont want this one unless there is auth/cookies involved
    res.setHeader('Access-Control-Allow-Methods', 'GET,PATCH,POST,PUT,DELETE');
    const keyInJsn = JSON.parse(process.env.CREDENTIALS_STR)
    const auth = new GoogleAuth({
        credentials: keyInJsn
    });
    const url = process.env.RUN_APP_URL;
    
    //Create your client with an Identity token.
	const client = await auth.getIdTokenClient(url);
	const result = await client.request({ url });
    const resData = result.data;
    res.send(resData);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://localhost:", port);
});
