import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
