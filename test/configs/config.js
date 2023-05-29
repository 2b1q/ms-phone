module.exports = {
  name: 'phone',
  amqp: {
    transport: {
      connection: {
        host: 'rabbitmq',
        port: 5672,
      },
      debug: true,
    },
  },
  phone: {
    accounts: {
      test_account_twilio: {
        authToken: process.env.TEST_AUTH_TOKEN,
        from: process.env.TEST_PHONE_NUMBER,
        sid: process.env.TEST_ACCOUNT_SID,
        type: 'twilio',
      },
      test_account_messagebird: {
        apiKey: process.env.TEST_API_KEY_MESSAGE_BIRD,
        from: process.env.TEST_PHONE_NUMBER,
        type: 'messagebird',
      },
    },
  },
};
