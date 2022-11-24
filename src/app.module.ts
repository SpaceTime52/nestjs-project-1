import { join } from 'path';

import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CategoryModule } from './category/category.module';
import { MerchandiseModule } from './merchandise/merchandise.module';
import { OrderModule } from './order/order.module';
import { DeliveryModule } from './delivery/delivery.module';

import { CategoryService } from './category/category.service';
import { MerchandiseService } from './merchandise/merchandise.service';
import { OrderService } from './order/order.service';
import { DeliveryService } from './delivery/delivery.service';

import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MerchandiseModule,
    CategoryModule,
    OrderModule,
    DeliveryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    MerchandiseService,
    CategoryService,
    OrderService,
    DeliveryService,
  ],
})
export class AppModule {}
