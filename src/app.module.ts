import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: `${process.env.DB_HOST}`,
      database: `${process.env.DB_NAME}`,
      port: +process.env.DB_PORT,
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PASSWORD}`,
      synchronize: typeof process.env.DB_SYNCHRONIZE == 'string',
      ssl: true,
      autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
