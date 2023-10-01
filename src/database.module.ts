import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule], 
    useFactory: (configService: ConfigService) => ({
      type: 'postgres' as 'postgres', // Change this to match your database type
      host: configService.get<string>('AZURE_POSTGRESQL_HOST'), // Your database host
      port: configService.get<number>('AZURE_POSTGRESQL_PORT'), // Your database port
      username: configService.get<string>('AZURE_POSTGRESQL_USER'), // Your database username
      password: configService.get<string>('AZURE_POSTGRESQL_PASSWORD'), // Your database password
      database: configService.get<string>('AZURE_POSTGRESQL_DATABASE'), // Your database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: configService.get<boolean>('PGSYNCHRONIZE'), // Set to true for development, but false for production
    }),
    inject:[ConfigService] 
  })],
})
export class DatabaseModule {}