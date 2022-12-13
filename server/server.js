var express = require('express');
var app = express();
require('dotenv').config();
const GoogleAuth = require("google-auth-library").GoogleAuth;

app.get('/hello', async function (req, res) {
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
