
export const Env_Config = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  mongodb: process.env.MONGODB,
});