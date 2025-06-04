import { Request, Response } from 'express';
import { checkAndSendReminders } from '../services/reminder.service';

export const sendReminders = async (req: Request, res: Response) => {
  try {
    await checkAndSendReminders();
    res.status(200).json({ message: 'Reminders sent successfully' });
  } catch (error) {
    console.error('Error sending reminders:', error);
    res.status(500).json({ error: 'Failed to send reminders' });
  }
}; 