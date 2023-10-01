import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule], 
    useFactory: (configService: ConfigService) => ({
      type: 'postgres' as 'postgres', // Change this to match your database type
      host: configService.get<string>('PGHOST'), // Your database host
      port: configService.get<number>('PGPORT'), // Your database port
      username: configService.get<string>('PGUSER'), // Your database username
      password: configService.get<string>('PGPASSWORD'), // Your database password
      database: configService.get<string>('PGDATABASE'), // Your database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: configService.get<boolean>('PGSYNCHRONIZE'), // Set to true for development, but false for production
    }),
    inject:[ConfigService]
    
  })],
})
export class DatabaseModule {}