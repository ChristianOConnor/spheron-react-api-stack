const GoogleAuth = require("google-auth-library").GoogleAuth;

exports.handler = async (event) => {
  const keyInJsn = JSON.parse(process.env.CREDENTIALS_STR)
  const auth = new GoogleAuth({
    credentials: keyInJsn
  });
  const url = process.env.RUN_APP_URL;

  //Create your client with an Identity token.
	const client = await auth.getIdTokenClient(url)
	const result = await client.request({ url })

  return {
    statusCode: 200,
    body: result.data,
  };
};
