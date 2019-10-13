const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "garretts-notes-service-dev-attachmentsbucket-1jzmjmvqfvl4k"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kzm9kjk4tf.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_epBxjRTaC",
    APP_CLIENT_ID: "6ihrv79e1b2cj62b9e95rcsira",
    IDENTITY_POOL_ID: "us-east-1:73dd19ab-e60c-46f1-bd32-ec1069016024"
  },
  STRIPE_KEY: "pk_test_jnofTXOrmkOpx2HrUp2AHv2S00yVVcvidx"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "garretts-notes-service-prod-attachmentsbucket-5pgkroyn8bqq"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nv31c9cyn1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_RYqNopLsu",
    APP_CLIENT_ID: "3llmj11blgddq5l4i1bel56tju",
    IDENTITY_POOL_ID: "us-east-1:66ed5639-cd4e-476a-9a61-fa2c3499ba2c"
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
