import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';
import { ConfigModule } from '@nestjs/config';

const dbUri =
  process.env.URI ||
  'mongodb+srv://vdaberezin:HMFYqGoffhC5rca1@mongo-training.xpcjpa7.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-training';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(dbUri), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
