import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClienteModule } from './modules/cliente/cliente.module';

@Module({
  imports: [DatabaseModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
