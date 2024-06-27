import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';
import { BacksoundContext } from '@/context/backsound-context';

export default function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);

    const backsound = useContext(BacksoundContext);

    function toggleVisibility() {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`${isVisible ? 'opacity-100' : 'opacity-0'} floating-buttons fixed right-[20px] top-1/2 z-50 -translate-y-1/2 transition-all duration-500 ease-in-out`}>
            <button onClick={scrollToTop} role="button" className="btn-primary mb-2 flex items-center rounded-lg p-2">
                <Image width={14} height={14} src="/images/icons/arrow-top-white.svg" alt="Arrow Top Icon" />
            </button>

            <a id="btn-comment" href="#rsvp" className="btn-primary mb-2 flex items-center rounded-lg p-2">
                <Image width={14} height={14} src="/images/icons/message-white.svg" alt="Message Icon" />
            </a>

            <button onClick={backsound?.toggleBacksound} className="btn-primary flex items-center rounded-lg p-2">
                {backsound?.isPlayed ? (
                    <Image
                        width={14}
                        height={14}
                        src="/images/icons/volume-up-line-white.svg"
                        alt="Volume Icon"
                        className="up"
                    />
                ) : (
                    <Image
                        width={14}
                        height={14}
                        src="/images/icons/volume-mute-line-white.svg"
                        alt="Mute Icon"
                        className="mute d-none"
                    />
                )}
            </button>
        </div>
    );
}
