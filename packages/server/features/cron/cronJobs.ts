import cron from 'node-cron';
import { sendDailyNotification } from '../notifications/notificationController';

export function setupCronJobs() {
  cron.schedule('*/1 * * * *', () => {
    sendDailyNotification();
  });

  cron.schedule('0 9 * * *', () => {
    sendDailyNotification();
  });

  cron.schedule('0 18 * * *', () => {
    sendDailyNotification();
  });
}
