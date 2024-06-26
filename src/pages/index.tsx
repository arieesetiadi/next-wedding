import { useState } from 'react';

import OnBoarding from '@/components/on-boarding';
import Hero from '@/components/hero';
import About from '@/components/about';
import Gallery from '@/components/gallery';
import Countdown from '@/components/countdown';
import Location from '@/components/location';
import Quotes from '@/components/quotes';
import Gift from '@/components/gift';
import Rsvp from '@/components/rsvp';
import RsvpList from '@/components/rsvp-list';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';

export default function HomePage() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <>
            <OnBoarding isOpened={isOpened} setIsOpened={setIsOpened} />

            {isOpened && (
                <main>
                    <Hero />
                    <About />
                    <Gallery />
                    <Countdown />
                    <Location />
                    <Quotes />
                    <Gift />
                    <Rsvp />
                    <RsvpList />
                    <Footer />
                    <FloatingButtons />
                </main>
            )}
        </>
    );
}
