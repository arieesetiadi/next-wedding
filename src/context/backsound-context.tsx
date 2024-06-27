import { createContext, useState, useEffect, ReactNode } from 'react';

export const BacksoundContext = createContext<{
    isPlayed: boolean;
    toggleBacksound: () => void;
} | null>(null);

export const BacksoundProvider = ({ children }: { children: ReactNode }) => {
    const [isPlayed, setIsPlayed] = useState<boolean>(false);
    const [backsound, setBacksound] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setBacksound(new Audio('audios/backsound.mp3'));
    }, []);

    const toggleBacksound = () => {
        if (backsound?.paused) {
            backsound?.play();
            setIsPlayed(true);
        } else {
            backsound?.pause();
            setIsPlayed(false);
        }
    };

    return <BacksoundContext.Provider value={{ isPlayed, toggleBacksound }}>{children}</BacksoundContext.Provider>;
};
