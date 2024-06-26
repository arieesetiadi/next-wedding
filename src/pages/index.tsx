import { useState } from 'react';

import Hero from '@/components/hero';
import OnBoarding from '@/components/on-boarding';

export default function HomePage() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <>
            <OnBoarding isOpened={isOpened} setIsOpened={setIsOpened} />

            {isOpened && (
                <main>
                    <Hero />
                </main>
            )}
        </>
    );
}
