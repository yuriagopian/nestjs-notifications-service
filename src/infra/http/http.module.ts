import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
@Module({
  imports: [NotificationsController],
  controllers: [],
  providers: [SendNotification],
})
export class HttpModule {}
