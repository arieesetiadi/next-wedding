import { useState } from 'react';

import OnBoarding from '@/components/on-boarding';
import Hero from '@/components/hero';
import About from '@/components/about';
import Gallery from '@/components/gallery';
import Countdown from '@/components/countdown';

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
                </main>
            )}
        </>
    );
}
