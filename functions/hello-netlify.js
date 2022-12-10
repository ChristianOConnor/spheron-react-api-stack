exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: process.env.GREETING_TEST,
  };
};
