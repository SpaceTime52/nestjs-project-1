import { Module } from '@nestjs/common';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MerchandiseModule } from './controllers/merchandise/merchandise.module';
import { CategoryModule } from './controllers/category/category.module';
import { CategoryService } from './controllers/category/category.service';
import { MerchandiseService } from './controllers/merchandise/merchandise.service';
import { DatabaseModule } from './entities/database.module';
import { OrderModule } from './controllers/order/order.module';
import { DeliveryModule } from './controllers/delivery/delivery.module';
import { OrderService } from './controllers/order/order.service';
import { DeliveryService } from './controllers/delivery/delivery.service';
import { OrderedMerchandiseModule } from './entities/orderedMerchandise/orderedMerchandise.module';
import { PaymentInfoModule } from './entities/paymentInfo/paymentInfo.module';

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
      entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
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
    OrderedMerchandiseModule,
    PaymentInfoModule,
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
