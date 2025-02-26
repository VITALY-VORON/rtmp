import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { StreamModule } from './stream/stream.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      expandVariables: true,
      envFilePath: '../../.env',
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    StreamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
