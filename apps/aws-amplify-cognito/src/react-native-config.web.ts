const env = (
  import.meta as ImportMeta & {
    env: Record<string, string | undefined>;
  }
).env;

const Config = {
  AWS_COGNITO_USER_POOL_ID:
    env.VITE_AWS_COGNITO_USER_POOL_ID ?? '',
  AWS_COGNITO_USER_POOL_CLIENT_ID:
    env.VITE_AWS_COGNITO_USER_POOL_CLIENT_ID ?? '',
};

export default Config;
