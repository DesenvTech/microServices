import { NotificationEntity } from '../entities/notification.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      database: 'user',
      entities: [NotificationEntity],
      synchronize: true,
    }),
  ],
})
export class PostgresDatabaseModule {}
