import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notificationRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
