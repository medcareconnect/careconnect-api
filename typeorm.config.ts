// typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Change this to match your database type
  host: 'localhost', // Your database host
  port: 5432, // Your database port
  username: 'your_username', // Your database username
  password: 'your_password', // Your database password
  database: 'your_database_name', // Your database name
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to true for development, but false for production
};

export default typeOrmConfig;
