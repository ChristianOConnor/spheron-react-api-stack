const GoogleAuth = require("google-auth-library").GoogleAuth;

exports.handler = async (event) => {
  const auth = new GoogleAuth({
    keyFilename: "<CREDENTIAL PATH>"
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
