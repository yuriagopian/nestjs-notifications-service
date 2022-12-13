import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
