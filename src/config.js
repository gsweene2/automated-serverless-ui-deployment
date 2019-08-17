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
    REGION: "us-east-1",
    BUCKET: "garretts-notes-service-prod-attachmentsbucket-45kadg09pe9b"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2gssvci93k.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2IGyFmTdL",
    APP_CLIENT_ID: "79pjocr53rhet1ra5k0660156v",
    IDENTITY_POOL_ID: "us-east-1:50cf7e3f-b06b-4a5a-b1a4-460c89bdd8b4"
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
