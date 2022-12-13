# How to Run  

- `cd server`
- Make a `.env` file that looks like this:  
    ```
    CREDENTIALS_STR={"type": "service_account","project_id": "<PROJECT ID>","private_key_id": "<PRIVATE KEY ID>","private_key": "-----BEGIN PRIVATE KEY-----\<PRIVATE KEY>\n-----END PRIVATE KEY-----\n","client_email": "<SERVICE ACCOUNT NAME>@<PROJECT NAME>.iam.gserviceaccount.com","client_id": "<CLIENT ID>","auth_uri": "https://accounts.google.com/o/oauth2/auth","token_uri": "https://oauth2.googleapis.com/token","auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/<SERVICE ACCOUNT NAME>.iam.gserviceaccount.com"}
    RUN_APP_URL=<MY GOOGLE CLOUD FUNCTION TRIGGER URL>
    ```  
- (Make sure you have Docker Desktop up and running)
- `docker build -t spheron-api1 . `  
- `docker run -d -p 8081:8081 --env-file=.env spheron-api1`  
- `cd ..`  
- `cd frontend/`  
- `npm install`  
- `npm start`  
- (When you're finished testing the app, stop the docker container running the backend, as it will continue to listen on 8081 for API requests)
