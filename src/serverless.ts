import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  if (!server) {
    const app = await NestFactory.create(AppModule);
    await app.init();
    server = serverlessExpress({
      app: app.getHttpAdapter().getInstance(),
    });
  }
  return server(event, context, callback);
};
