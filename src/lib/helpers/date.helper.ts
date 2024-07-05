import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function getCountdown(date: string): Countdown {
    const targetDate = new Date(date);
    const currentDate = new Date();

    // @ts-ignore
    const ms = targetDate - currentDate;
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

export function getDatetimeDiff(date: Date) {
    return dayjs(date).fromNow();
}
