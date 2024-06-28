import Image from 'next/image';
import EaseInOutDiv from './motions/ease-in-out-div';

export default function Quotes() {
    return (
        <>
            <section className="bg-secondary-light px-4 py-20">
                <div className="mx-auto max-w-screen-lg">
                    <div className="flex flex-wrap items-center">
                        <EaseInOutDiv className="mb-10 w-full lg:mb-0 lg:w-1/2">
                            <Image
                                width={40}
                                height={40}
                                src="/images/icons/feather.png"
                                alt="Feather Icon"
                                className="mb-3"
                            />

                            <p className="ff-italiana text-[24px] font-[400] text-primary">
                                You might not have been my first love but you were the love that made all the other
                                loves irrelevant.
                            </p>
                        </EaseInOutDiv>

                        <EaseInOutDiv className="relative w-full lg:w-1/2">
                            <div className="flex justify-center">
                                <div className="relative h-[650px] w-full sm:h-[490px] sm:w-[327px]">
                                    <Image
                                        src="/images/general/photo-quotes-2.webp"
                                        alt="Quotes Image 2"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="rounded-[8px] object-cover"
                                    />
                                </div>
                            </div>
                        </EaseInOutDiv>
                    </div>
                </div>
            </section>

            <div className="h-[80px] w-full bg-[url('/images/illustrations/wave-bottom.png')] bg-cover bg-bottom bg-no-repeat"></div>
        </>
    );
}
