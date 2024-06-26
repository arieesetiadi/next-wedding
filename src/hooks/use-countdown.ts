import { useState, useEffect } from 'react';
import { getCountdown, type Countdown } from '@/lib/helpers/date.helper';

export default function useCountdown(date: string) {
    const [countdown, setCountdown] = useState<Countdown>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => {
            setCountdown(getCountdown(date) as Countdown);
        }, 1000);
    }, []);

    return countdown;
}
