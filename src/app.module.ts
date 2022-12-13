import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
/**
  We can use what service we need or choose, because te two services below, 
  implements de same behavior to the class father mail.service
 */
import { SMTPMailService } from './mail/smtp-mail.service';
import { PostmarkMailService } from './mail/postmark.mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostmarkMailService,
    },
  ],
})
export class AppModule {}
