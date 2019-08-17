const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "garretts-notes-service-dev-attachmentsbucket-14sduqcntsgtu"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7drt7fxqvl.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7GF3xorW9",
    APP_CLIENT_ID: "1nd3bf8h3u2lepoie732tun1hn",
    IDENTITY_POOL_ID: "us-east-1:b743f651-6ca5-4da4-97b1-6a86cb88504b"
  },
  STRIPE_KEY: "pk_test_jnofTXOrmkOpx2HrUp2AHv2S00yVVcvidx"
};

const prod = {
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
