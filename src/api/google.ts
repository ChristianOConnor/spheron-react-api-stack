import { JWT } from "google-auth-library";
import keys from 'PATH TO KEYS HERE';

async function BasicTest() {
  const client = new JWT({
    email: keys.client_email,
    key: keys.private_key
  });
  const url = '<FUNCTION URL>';
  const res = await client.request({url});
  return res.data
  //return 'does this work'
}

export default BasicTest;