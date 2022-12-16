import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [NotificationsController],
  controllers: [],
  providers: [],
})
export class HttpModule {}
